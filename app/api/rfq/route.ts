import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { rfqSchema } from "@/lib/validations/rfq";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("reCAPTCHA secret key not configured");
    return false;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();

    // reCAPTCHA v3 returns a score between 0.0 and 1.0
    // 1.0 is very likely a good interaction, 0.0 is very likely a bot
    // We'll use 0.5 as the threshold (recommended by Google)
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

// Format project type for display
function formatProjectType(value: string): string {
  const types: Record<string, string> = {
    "marketing-website": "Marketing Website",
    "personal-website": "Personal Website",
    "ecommerce-website": "E-commerce Website",
    "saas-website": "SaaS Website",
    "other": "Other",
  };
  return types[value] || value;
}

// Format budget for display
function formatBudget(value: string): string {
  const budgets: Record<string, string> = {
    "1400-2999": "$1,400 - $2,999",
    "3000-6999": "$3,000 - $6,999",
    "7000-10000": "$7,000 - $10,000",
    "10000+": "$10,000+",
  };
  return budgets[value] || value;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body with Zod
    const validationResult = rfqSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return NextResponse.json(
        {
          error: "Validation failed",
          details: errors,
          message: errors[0]?.message || "Please check your input and try again."
        },
        { status: 400 }
      );
    }

    const {
      fullName,
      companyName,
      email,
      projectType,
      budget,
      projectBrief,
      recaptchaToken,
    } = validationResult.data;

    // Verify reCAPTCHA token
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Shafstudio RFQ Form <onboarding@resend.dev>",
      to: ["ad.shafstudio@gmail.com"],
      subject: `New RFQ: ${formatProjectType(projectType)} - ${fullName}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #1e293b;
                max-width: 650px;
                margin: 0 auto;
                padding: 0;
                background-color: #f8fafc;
              }
              .container {
                background: white;
                margin: 20px;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
                position: relative;
              }
              .header::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
                letter-spacing: -0.5px;
              }
              .header .badge {
                display: inline-block;
                background: rgba(59, 130, 246, 0.2);
                color: #93c5fd;
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 11px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-top: 12px;
                border: 1px solid rgba(59, 130, 246, 0.3);
              }
              .content {
                padding: 40px 30px;
              }
              .section {
                margin-bottom: 30px;
              }
              .section-title {
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #64748b;
                margin-bottom: 12px;
                padding-bottom: 8px;
                border-bottom: 2px solid #e2e8f0;
              }
              .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 30px;
              }
              .info-item {
                background: #f8fafc;
                padding: 18px;
                border-radius: 8px;
                border-left: 3px solid #3b82f6;
              }
              .info-label {
                font-size: 11px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #64748b;
                margin-bottom: 6px;
              }
              .info-value {
                font-size: 16px;
                font-weight: 600;
                color: #1e293b;
              }
              .info-value.highlight {
                color: #3b82f6;
                font-size: 18px;
              }
              .brief-box {
                background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                padding: 24px;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
                border-left: 4px solid #8b5cf6;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 1.7;
                color: #334155;
              }
              .footer {
                background: #f8fafc;
                padding: 25px 30px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
              }
              .footer p {
                margin: 0;
                font-size: 13px;
                color: #64748b;
              }
              .footer a {
                color: #3b82f6;
                text-decoration: none;
                font-weight: 600;
              }
              @media (max-width: 600px) {
                .info-grid {
                  grid-template-columns: 1fr;
                }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📋 New Quotation Request</h1>
                <div class="badge">RFQ Submission</div>
              </div>

              <div class="content">
                <div class="section">
                  <div class="section-title">Client Information</div>
                  <div class="info-grid">
                    <div class="info-item">
                      <div class="info-label">Full Name</div>
                      <div class="info-value">${fullName}</div>
                    </div>
                    ${
                      companyName
                        ? `
                    <div class="info-item">
                      <div class="info-label">Company</div>
                      <div class="info-value">${companyName}</div>
                    </div>
                    `
                        : ""
                    }
                    <div class="info-item">
                      <div class="info-label">Email Address</div>
                      <div class="info-value">
                        <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="section">
                  <div class="section-title">Project Details</div>
                  <div class="info-grid">
                    <div class="info-item">
                      <div class="info-label">Project Type</div>
                      <div class="info-value highlight">${formatProjectType(projectType)}</div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">Budget Range</div>
                      <div class="info-value highlight">${formatBudget(budget)}</div>
                    </div>
                  </div>
                </div>

                <div class="section">
                  <div class="section-title">Project Brief</div>
                  <div class="brief-box">${projectBrief}</div>
                </div>
              </div>

              <div class="footer">
                <p>
                  This RFQ was submitted via <strong>Shafstudio Official Website</strong><br>
                  <a href="mailto:${email}">Reply to ${fullName}</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send RFQ. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "RFQ submitted successfully!", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("RFQ form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
