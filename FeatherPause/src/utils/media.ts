import * as FileSystem from 'expo-file-system';
import { v4 as uuidv4 } from 'uuid';

const IMAGES_DIR = FileSystem.documentDirectory + 'images/';
const AUDIO_DIR = FileSystem.documentDirectory + 'audio/';

async function ensureDir(dir: string) {
  const info = await FileSystem.getInfoAsync(dir);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
  }
}

export async function saveImage(uri: string): Promise<string> {
  await ensureDir(IMAGES_DIR);
  const filename = `${uuidv4()}.jpg`;
  const dest = IMAGES_DIR + filename;
  await FileSystem.copyAsync({ from: uri, to: dest });
  return dest;
}

export async function saveAudio(uri: string): Promise<string> {
  await ensureDir(AUDIO_DIR);
  const filename = `${uuidv4()}.m4a`;
  const dest = AUDIO_DIR + filename;
  await FileSystem.copyAsync({ from: uri, to: dest });
  return dest;
}

export async function removeFile(uri: string): Promise<void> {
  try {
    await FileSystem.deleteAsync(uri, { idempotent: true });
  } catch {}
}


