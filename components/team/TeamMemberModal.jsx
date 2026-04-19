'use client';

import { SafeAvatarImage } from '@/components/common/SafeImage';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Building2, Mail, X } from 'lucide-react';
export function TeamMemberModal({ member, open, onClose }) {
    return (
        <Dialog
            open={open && !!member}
            onClose={onClose}
            className="relative z-[100]"
        >
            <DialogBackdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm transition duration-200 data-[closed]:opacity-0" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-border-subtle bg-bg-card shadow-2xl transition duration-200 data-[closed]:scale-95 data-[closed]:opacity-0">
                    {member ? (
                        <>
                            <div className="relative h-32 bg-gradient-to-br from-primary to-secondary">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="absolute right-4 top-4 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                                    aria-label="Close"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/25 px-3 py-1 text-sm text-white">
                                    <Building2 className="h-4 w-4" />
                                    {member.department.name}
                                </div>
                            </div>
                            <div className="-mt-12 flex flex-col items-center px-6 pb-8">
                                <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-bg-card">
                                    <SafeAvatarImage
                                        src={member.image}
                                        alt={member.name}
                                        width={112}
                                        height={112}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <h2 className="mt-4 font-heading text-2xl font-bold text-text-primary">
                                    {member.name}
                                </h2>
                                <p className="font-medium text-secondary">
                                    {member.role}
                                </p>
                                <p className="mt-4 text-center text-sm leading-relaxed text-text-secondary">
                                    {member.bio}
                                </p>
                                <div className="mt-6 flex w-full justify-center gap-8 rounded-2xl border border-border-subtle bg-bg-surface/50 py-4 text-center">
                                    <div>
                                        <p className="font-heading text-xl font-bold text-accent">
                                            {member.experience}+
                                        </p>
                                        <p className="text-xs text-text-secondary">
                                            Years
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-heading text-xl font-bold text-accent">
                                            {member.projects}+
                                        </p>
                                        <p className="text-xs text-text-secondary">
                                            Projects
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-heading text-xl font-bold text-accent">
                                            {member.expertise.length}
                                        </p>
                                        <p className="text-xs text-text-secondary">
                                            Skills
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-wrap justify-center gap-2">
                                    {member.expertise.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-accent"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white"
                                >
                                    <Mail className="h-4 w-4" />
                                    Get in Touch
                                </a>
                            </div>
                        </>
                    ) : null}
                </DialogPanel>
            </div>
        </Dialog>
    );
}
