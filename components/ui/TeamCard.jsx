"use client";

import { SafeAvatarImage } from "@/components/common/SafeImage";
import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { GlassCard } from "./GlassCard";

export function TeamCard({ member, onSelect }) {
  const reduce = useReducedMotion();
  const socials = member.socials;

  return (
    <GlassCard className="overflow-hidden p-5 md:p-6">
      <motion.div
        className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4"
        {...(reduce ? {} : { whileHover: { y: -4 } })}
      >
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-secondary/30">
          <SafeAvatarImage
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-lg font-bold text-text-primary truncate">
            {member.name}
          </h3>
          <p className="text-sm text-secondary">{member.role}</p>
          <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
            {member.bio}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <a
              href={`mailto:${member.email}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-bg-surface text-text-secondary hover:text-accent transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
            {socials?.linkedin ? (
              <a
                href={socials.linkedin}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-bg-surface text-text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            ) : null}
            {socials?.github ? (
              <a
                href={socials.github}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-bg-surface text-text-secondary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            ) : null}
            {socials?.twitter ? (
              <a
                href={socials.twitter}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-bg-surface text-text-secondary hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
            ) : null}
            {onSelect ? (
              <button
                type="button"
                onClick={() => onSelect(member)}
                className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-xs font-semibold text-white"
              >
                View profile
              </button>
            ) : null}
          </div>
        </div>
      </motion.div>
    </GlassCard>
  );
}
