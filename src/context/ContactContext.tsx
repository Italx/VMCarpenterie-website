import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import ContactOverlay from "../components/ContactOverlay";

interface ContactContextType {
    openContact: () => void;
    closeContact: () => void;
    isContactOpen: boolean;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        if (isContactOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isContactOpen]);

    return (
        <ContactContext.Provider
            value={{
                openContact: () => setIsContactOpen(true),
                closeContact: () => setIsContactOpen(false),
                isContactOpen,
            }}
        >
            {children}
            <AnimatePresence>
                {isContactOpen && <ContactOverlay onClose={() => setIsContactOpen(false)} />}
            </AnimatePresence>
        </ContactContext.Provider>
    );
}

export function useContact() {
    const context = useContext(ContactContext);
    if (context === undefined) {
        throw new Error("useContact must be used within a ContactProvider");
    }
    return context;
}
