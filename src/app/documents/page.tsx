import { redirect } from 'next/navigation';

export default function DocumentsRedirect() {
  redirect('/?tab=documents');
}
