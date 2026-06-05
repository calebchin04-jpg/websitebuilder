"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, X, Send, ChevronRight } from "lucide-react"

type Mode = "business" | "consumer"

interface Message {
  role: "user" | "assistant"
  content: string
}

const SUGGESTED: Record<Mode, string[]> = {
  business: [
    "What's the Founding 30 offer?",
    "How does the flyer campaign work?",
    "What's included in each tier?",
  ],
  consumer: [
    "How do I unlock a deal?",
    "How does voting work?",
    "How does the giveaway work?",
  ],
}

const MODE_CONTEXT: Record<Mode, string> = {
  business:
    "Context: This visitor is a local business owner considering joining Crossroads.",
  consumer:
    "Context: This visitor is a local consumer looking to discover deals and local businesses.",
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>("business")
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  const switchMode = (next: Mode) => {
    if (next === mode) return
    setMode(next)
    setMessages([])
  }

  const send = async (text: string) => {
    if (!text.trim() || isLoading) return
    setInput("")

    // Prepend mode context to the first real message
    const contextMsg: Message = { role: "user", content: MODE_CONTEXT[mode] }
    const historyWithContext: Message[] =
      messages.length === 0 ? [contextMsg] : messages

    const next: Message[] = [...historyWithContext, { role: "user", content: text }]
    // Show user message + empty assistant placeholder
    setMessages([...next, { role: "assistant", content: "" }])
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      })

      if (!res.ok || !res.body) {
        setMessages([
          ...next,
          { role: "assistant", content: "Something went wrong. Please try again." },
        ])
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        assistantContent += decoder.decode(value, { stream: true })
        setMessages([...next, { role: "assistant", content: assistantContent }])
      }
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Something went wrong. Please try again." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Visible messages: hide the hidden mode context message
  const visible = messages.filter(
    (m) => m.role !== "user" || !Object.values(MODE_CONTEXT).includes(m.content)
  )

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[360px] h-[500px] rounded-2xl border border-[rgba(42,31,20,0.12)] bg-[#FBF7EE] shadow-[0_8px_40px_rgba(42,31,20,0.18)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(42,31,20,0.08)]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#1F4E3D] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#FBF6E9]">C</span>
                </div>
                <span className="text-sm font-semibold text-[#2A1F14]">Ask Crossroads</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[rgba(42,31,20,0.4)] hover:text-[#2A1F14] transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Mode toggle */}
            <div className="flex gap-1.5 px-4 py-2.5 border-b border-[rgba(42,31,20,0.06)]">
              {(["business", "consumer"] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => switchMode(m)}
                  className={`flex-1 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
                    mode === m
                      ? "bg-[#1F4E3D] text-[#FBF6E9]"
                      : "bg-[rgba(42,31,20,0.06)] text-[rgba(42,31,20,0.55)] hover:bg-[rgba(42,31,20,0.1)]"
                  }`}
                >
                  {m === "business" ? "I'm a Business" : "I'm a Customer"}
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5">
              {visible.length === 0 ? (
                <div className="space-y-2">
                  <p className="text-[11px] text-[rgba(42,31,20,0.45)] uppercase tracking-wider font-semibold mb-3">
                    Suggested questions
                  </p>
                  {SUGGESTED[mode].map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="w-full text-left flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl bg-[#FFFCF2] border border-[rgba(42,31,20,0.1)] text-[13px] text-[rgba(42,31,20,0.75)] hover:border-[#1F4E3D] hover:text-[#2A1F14] transition-all"
                    >
                      <span>{s}</span>
                      <ChevronRight size={13} className="shrink-0 text-[rgba(42,31,20,0.35)]" />
                    </button>
                  ))}
                </div>
              ) : (
                visible.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap ${
                        m.role === "user"
                          ? "bg-[#1F4E3D] text-[#FBF6E9] rounded-br-sm"
                          : "bg-[#FFFCF2] border border-[rgba(42,31,20,0.1)] text-[#2A1F14] rounded-bl-sm"
                      }`}
                    >
                      {m.content}
                      {/* Cursor blink for the last streaming assistant message */}
                      {isLoading && i === visible.length - 1 && m.role === "assistant" && (
                        <motion.span
                          className="inline-block w-0.5 h-3.5 bg-[rgba(42,31,20,0.4)] ml-0.5 align-middle"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </div>
                ))
              )}

              {/* Typing indicator (only before first token arrives) */}
              {isLoading && visible.length > 0 && visible[visible.length - 1].content === "" && (
                <div className="flex justify-start">
                  <div className="bg-[#FFFCF2] border border-[rgba(42,31,20,0.1)] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                    {[0, 0.15, 0.3].map((delay, i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[rgba(42,31,20,0.35)]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(input) }}
              className="flex gap-2 px-3 py-3 border-t border-[rgba(42,31,20,0.08)]"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                placeholder="Ask anything…"
                className="flex-1 bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-xl px-3.5 py-2 text-[13px] text-[#2A1F14] placeholder-[rgba(42,31,20,0.35)] focus:border-[#1F4E3D] focus:outline-none transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-9 h-9 rounded-xl bg-[#1F4E3D] flex items-center justify-center text-[#FBF6E9] hover:bg-[#2A6651] transition-colors disabled:opacity-40 shrink-0"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#1F4E3D] text-[#FBF6E9] shadow-[0_4px_20px_rgba(31,78,61,0.4)] flex items-center justify-center hover:bg-[#2A6651] transition-colors"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
