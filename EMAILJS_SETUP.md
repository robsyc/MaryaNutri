# EmailJS Setup Guide for MaryaNutri Contact Form

## Overview
Your contact form is now ready to use EmailJS - a free service that allows you to send emails directly from your frontend without a backend server.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Important**: Copy the **Service ID** - you'll need this

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from the MaryaNutri website contact form.
```

4. **Important**: Copy the **Template ID** - you'll need this

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. **Important**: Copy this key - you'll need this

### 5. Update Your Code
Replace the placeholder values in `src/routes/+layout.svelte`:

```typescript
// Replace these with your actual EmailJS values
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

### 6. Environment Variables (Recommended)
For better security, create a `.env` file in your project root:

```env
PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Then update your code to use environment variables:

```typescript
import { PUBLIC_EMAILJS_SERVICE_ID, PUBLIC_EMAILJS_TEMPLATE_ID, PUBLIC_EMAILJS_PUBLIC_KEY } from '$env/static/public';

const EMAILJS_SERVICE_ID = PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = PUBLIC_EMAILJS_PUBLIC_KEY;
```

## Testing
1. Run your development server: `npm run dev`
2. Open the contact form
3. Fill out and submit a test message
4. Check your email inbox for the message

## Free Tier Limits
- **200 emails per month** (free tier)
- Perfect for small to medium websites
- Upgrade available if you need more

## Troubleshooting

### Common Issues:
1. **"User ID is required"** - Make sure you've set the Public Key correctly
2. **"Service is not found"** - Check your Service ID
3. **"Template is not found"** - Check your Template ID
4. **Emails not arriving** - Check spam folder, verify email service setup

### Security Notes:
- Public Key is safe to expose (it's meant to be public)
- Service and Template IDs are also safe to expose
- EmailJS has built-in rate limiting and spam protection

## Alternative: Using Environment Variables in Production

For Vercel deployment, add these environment variables in your Vercel dashboard:
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

## Cost Comparison
- **EmailJS**: Free (200 emails/month), $15/month for 1000 emails
- **SendGrid**: Free (100 emails/day), then paid plans
- **Nodemailer + SMTP**: Requires backend server
- **Vercel Functions**: Would require backend implementation

EmailJS is the most cost-effective solution for your use case! 