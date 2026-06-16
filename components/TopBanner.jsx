"use client";

import Link from "next/link";
import { Trophy, ArrowRight } from "lucide-react";
import { ideaContestMeta } from "@/data/ideaContest.js";
import { showTopBanner } from "@/data/siteConfig.js";

export function TopBanner() {
  if (!showTopBanner) return null;

  return (
    <div className="bg-amber-500 text-black w-full py-2.5 px-4 flex items-center justify-center">
      <div className="flex items-center gap-x-2 sm:gap-x-4 flex-wrap justify-center gap-y-1 text-center">
        <Trophy className="w-4 h-4 shrink-0" />

        <span className="font-semibold text-sm tracking-wide">
          {ideaContestMeta.organizer} Idea Contest 2026
        </span>

        <span className="hidden sm:flex items-center gap-x-4 text-sm text-black/70">
          <span>·</span>
          <span>Prize Pool <strong className="text-black">{ideaContestMeta.prize}</strong></span>
          <span>·</span>
          <span>Deadline <strong className="text-black">{ideaContestMeta.deadline}</strong></span>
        </span>

        <Link
          href="/idea-contest"
          className="inline-flex items-center gap-1 text-sm font-bold underline underline-offset-2 hover:no-underline transition-all ml-1"
        >
          Register Now <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
