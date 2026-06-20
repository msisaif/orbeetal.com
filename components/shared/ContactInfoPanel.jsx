"use client";

import { Mail, Phone } from "lucide-react";
import { MotionFadeIn } from "@/components/common/MotionFadeIn";
import { GlassCard } from "@/components/ui/glass-card";
import { FacebookIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { contactInfo } from "@/data/index.js";

export function ContactInfoPanel() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      <MotionFadeIn x={-20} y={0}>
        <GlassCard className="rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col gap-6 h-full">
          <div>
            <h3 className="text-2xl font-display font-semibold text-white mb-2">
              Contact Information
            </h3>
            <p className="text-white/65 leading-relaxed">
              We&apos;re based in {contactInfo.location} and serve clients across the globe. Get in
              touch via any channel below.
            </p>
          </div>

          <a
            href={`mailto:${contactInfo.email}`}
            className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-white/65 uppercase tracking-wider mb-1">Email</div>
              <div className="text-white font-medium group-hover:text-primary transition-colors">
                {contactInfo.email}
              </div>
            </div>
          </a>

          <a
            href={contactInfo.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
              <Phone className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="text-xs text-white/65 uppercase tracking-wider mb-1">WhatsApp</div>
              <div className="text-white font-medium group-hover:text-green-400 transition-colors">
                {contactInfo.whatsapp.number}
              </div>
            </div>
          </a>

          <a
            href={contactInfo.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
              <FacebookIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-white/65 uppercase tracking-wider mb-1">Facebook</div>
              <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                {contactInfo.facebook.label}
              </div>
            </div>
          </a>

          <a
            href={contactInfo.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-4 rounded-xl border border-white/5 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors">
              <LinkedinIcon className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="text-xs text-white/65 uppercase tracking-wider mb-1">LinkedIn</div>
              <div className="text-white font-medium group-hover:text-sky-400 transition-colors">
                {contactInfo.linkedin.label}
              </div>
            </div>
          </a>
        </GlassCard>
      </MotionFadeIn>

      <MotionFadeIn x={20} y={0} delay={0.1}>
        <GlassCard className="rounded-2xl border border-white/10 overflow-hidden min-h-120 h-full">
          <iframe
            src={contactInfo.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "480px", display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Orbeetal Location"
          />
        </GlassCard>
      </MotionFadeIn>
    </div>
  );
}
