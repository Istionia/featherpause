import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';

export default function TabsIndex() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('./identify');
  }, [router]);
  
  return null;
}
