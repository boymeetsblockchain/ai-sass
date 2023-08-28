"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e148924a-4ad9-4c52-94f8-359b47673fd1");
  }, []);

  return null;
};