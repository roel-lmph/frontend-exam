'use client'

import { X } from 'lucide-react';
import React, { ReactNode, useEffect, useRef } from 'react'

interface ModalProps {
    open: boolean
    children: ReactNode
}

export default function Modal({ open, children }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (open) {
            dialogRef.current?.showModal()
            document.body.style.overflow = 'hidden';
            dialogRef.current?.addEventListener('close', closeDialog);

            // cleanup listeners
            return () => {
                dialogRef.current?.removeEventListener('close', closeDialog)
            }
        }

    }, [open])

    function closeDialog() {
        dialogRef.current?.close();
        document.body.style.overflow = '';
    }

    return (
        <dialog ref={dialogRef} className="relative overflow-visible backdrop:bg-black/85 bg-transparent">

            <div
                className="bg-white max-h-[90vh] max-w-[90vw] rounded-md">
                <button
                    className="absolute top-2 right-2 z-1 flex items-center justify-center w-5 h-5 outline-none	"
                    onClick={() => closeDialog()}
                >
                    <X className='text-gray-500' />
                </button>
                <div className='modal-body px-[30px] py-10'>
                    {children}
                </div>
            </div>
        </dialog>
    )
}
