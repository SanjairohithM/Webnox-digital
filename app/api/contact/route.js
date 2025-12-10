import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, contactNumber, enquiry, website, subject, type } = await request.json()

    // Validate required fields based on form type
    if (!name || !email) {
      return Response.json(
        { error: 'Name and Email are required' },
        { status: 400 }
      )
    }

    // Create transporter with better configuration for Vercel
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      pool: true,
      maxConnections: 1,
      rateDelta: 20000,
      rateLimit: 5,
    })

    // Construct the email content dynamicially
    let emailContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4ecdc4;">${email}</a></p>
    `;

    if (contactNumber) {
      emailContent += `<p><strong>Contact Number:</strong> ${contactNumber}</p>`;
    }

    if (website) {
      emailContent += `<p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>`;
    }

    if (enquiry) {
      emailContent += `
        <p><strong>Enquiry:</strong></p>
        <p style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">${enquiry}</p>
      `;
    }

    if (type === 'brand-audit') {
      emailContent += `
        <p style="margin-top: 15px; color: #666; font-style: italic;">
          This is a request for a Free 1-Page Brand Audit.
        </p>
      `;
    }

    // Email template
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: subject || `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4ecdc4;">${subject || 'New Contact Form Submission'}</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            ${emailContent}
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your website's contact form. <br/>
            <strong>Reply to this email to respond directly to ${name}</strong>
          </p>
        </div>
      `,
    }

    // Send email with timeout handling
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email timeout')), 10000)
      )
    ])

    return Response.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)

    if (error.message.includes('timeout')) {
      return Response.json(
        { error: 'Email service timeout. Please try again.' },
        { status: 408 }
      )
    }

    return Response.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
} 