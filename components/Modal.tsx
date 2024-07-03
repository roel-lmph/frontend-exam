'use client'

import { useModal } from '@/hooks/useModal';
import { X } from 'lucide-react';
import React, { ReactNode, useEffect, useRef } from 'react'

interface ModalProps {
    name: string;
    open?: boolean
    children: ReactNode
    title?: ReactNode | string
    showFooterClose?: boolean
}

export default function Modal({ name, open, children, title, showFooterClose = false }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const { activeModal, register: registerModal, modals, setActiveModal } = useModal()

    console.log(activeModal, modals)

    useEffect(() => {
        registerModal(name)
    }, [name, registerModal])

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

        setActiveModal('')
    }

    return (
        <dialog ref={dialogRef} className="relative overflow-visible backdrop:bg-black/85 bg-transparent">
            <div
                className="bg-white max-h-[90vh] max-w-[90vw] rounded-md px-4 ">
                {title && <div className='px-7 py-4'>
                    {title}
                    <hr className='opacity-75' />
                </div>}
                <button
                    className="absolute top-2 right-2 z-1 flex items-center justify-center w-5 h-5 outline-none	"
                    onClick={() => closeDialog()}
                >
                    <X className='text-gray-500' />
                </button>
                <div className='modal-body py-4 w-[600px] px-7 py-4'>
                    {children}
                </div>
                {showFooterClose && <div className='flex justify-end pb-4'>
                    <span className='text-[#0000ff] cursor-pointer' onClick={() => closeDialog()}>
                        CLOSE
                    </span>
                </div>}
            </div>
        </dialog>
    )
}
