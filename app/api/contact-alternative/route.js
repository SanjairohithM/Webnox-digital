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

    // Try multiple transporter configurations
    const transporters = [
      // Configuration 1: Gmail with OAuth2 (most reliable for production)
      process.env.OAUTH_REFRESH_TOKEN ? {
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_USER,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
      } : null,

      // Configuration 2: Alternative SMTP settings
      {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        connectionTimeout: 60000,
        greetingTimeout: 30000,
        socketTimeout: 60000,
      },

      // Configuration 3: Yahoo (often works better with serverless)
      process.env.YAHOO_USER ? {
        service: 'yahoo',
        auth: {
          user: process.env.YAHOO_USER,
          pass: process.env.YAHOO_PASS,
        },
      } : null,

      // Configuration 4: Outlook/Hotmail
      process.env.OUTLOOK_USER ? {
        service: 'hotmail',
        auth: {
          user: process.env.OUTLOOK_USER,
          pass: process.env.OUTLOOK_PASS,
        },
      } : null,
    ].filter(Boolean)

    // Try each transporter until one works
    for (const config of transporters) {
      try {
        const transporter = nodemailer.createTransporter(config)
        
        // Test connection first
        await transporter.verify()
        
        const mailOptions = {
          from: config.auth.user,
          to: process.env.RECIPIENT_EMAIL,
          replyTo: email,
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

        await transporter.sendMail(mailOptions)
        return Response.json({ message: 'Email sent successfully!' }, { status: 200 })
      } catch (configError) {
        console.warn(`Transporter failed:`, configError.message)
        continue
      }
    }

    return Response.json(
      { error: 'All email services failed. Please check configuration.' },
      { status: 500 }
    )
    
  } catch (error) {
    console.error('General error:', error)
    return Response.json(
      { error: 'Server error occurred.' },
      { status: 500 }
    )
  }
} 