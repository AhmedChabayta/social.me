"use client";

import useModalStore from "@src/store/useModalStore";
import { signIn } from "next-auth/react";
import React, { useEffect } from "react";

const RegisterModal = () => {
  const { isOpen, openModal, closeModal } = useModalStore();

  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []); // Add an empty dependency array to ensure the effect runs only once

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleModalClick}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/50 ${
        isOpen ? "bg-black/50" : ""
      }`}
    >
      <button onClick={() => signIn()}>Login</button>
    </div>
  );
};

export default RegisterModal;
