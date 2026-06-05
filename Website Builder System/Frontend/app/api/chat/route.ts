// MOCK MODE — swap this file's content for the real implementation (below)
// once you're ready to add your ANTHROPIC_API_KEY to .env.local.
//
// Real implementation:
// import { streamText } from "ai"
// import { anthropic } from "@ai-sdk/anthropic"
// export async function POST(req: Request) {
//   const { messages } = await req.json()
//   const result = streamText({ model: anthropic("claude-sonnet-4-6"), system: SYSTEM_PROMPT, messages, maxOutputTokens: 512 })
//   return result.toTextStreamResponse()
// }

const MOCK_REPLIES: Record<string, string> = {
  "founding 30": "The Founding 30 offer gives the first 30 businesses 2 months completely free, plus 50% off their chosen tier for life — locked in permanently. It's a one-time offer that never gets repeated once those 30 spots are gone.",
  "flyer": "The flyer campaign puts your business on a professionally designed brochure delivered to 10,000 local households for $500. There are 24 spots per campaign, and no two businesses in the same subcategory share a run — so you're the only mechanic, salon, or café on that drop.",
  "tier": "Hub memberships start at $10/month for Founding members (basic listing + voting + deal + QR card). Standard is $20/mo, Featured is $50/mo (adds posts + monthly report), and Large is $75/mo (strongest visibility + all features). There's also a $20 one-time setup fee for your NFC card and QR display.",
  "deal": "After a customer votes for your business, they instantly unlock the deal you set — could be 15% off, a free add-on, a free consultation, anything meaningful. You verify it visually at checkout: 'show this screen to redeem.'",
  "voting": "Customers scan your QR code or tap your NFC card, enter their name/email/phone, and cast a vote. They're limited to 1 vote per phone number per hour. Every vote automatically enters them into the monthly GTA-wide giveaway, and they instantly unlock your exclusive deal.",
  "giveaway": "Every vote on the hub enters the customer into the monthly GTA-wide giveaway. Winners are picked randomly and notified by email. It gives customers a reason to keep scanning and coming back — the leaderboard resets every day at midnight.",
  default: "Great question! Crossroads is a local marketing platform for Markham and GTA businesses. We offer flyer campaigns (10,000 households, $500/spot) and Digital Hub memberships starting at $10/month. The Founding 30 offer gives early members 2 months free + 50% off for life. Scroll down to the contact form to grab your spot.",
}

function mockReply(messages: Array<{ role: string; content: string }>): string {
  const last = messages.filter((m) => m.role === "user").pop()?.content?.toLowerCase() ?? ""
  for (const [key, reply] of Object.entries(MOCK_REPLIES)) {
    if (key !== "default" && last.includes(key)) return reply
  }
  return MOCK_REPLIES.default
}

export async function POST(req: Request) {
  const { messages } = await req.json()
  const reply = mockReply(messages)

  // Stream word by word to simulate real streaming
  const encoder = new TextEncoder()
  const words = reply.split(" ")

  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < words.length; i++) {
        const chunk = i === 0 ? words[i] : " " + words[i]
        controller.enqueue(encoder.encode(chunk))
        await new Promise((r) => setTimeout(r, 28))
      }
      controller.close()
    },
  })

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
