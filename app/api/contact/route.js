import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, contactNumber, enquiry } = await request.json()

    // Validate required fields
    if (!name || !email || !contactNumber || !enquiry) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter (You'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    })

    // Email template
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // The email where you want to receive messages
      replyTo: email, // When you reply, it will go to the user's email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4ecdc4;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4ecdc4;">${email}</a></p>
            <p><strong>Contact Number:</strong> ${contactNumber}</p>
            <p><strong>Enquiry:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">${enquiry}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your website's contact form. <br/>
            <strong>Reply to this email to respond directly to ${name}</strong>
          </p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return Response.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
} 