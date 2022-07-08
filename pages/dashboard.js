import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/users/private-profile">Profile</Link>
    </div>
  );
}
