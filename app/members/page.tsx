import type { Metadata } from "next";
import MemberDashboard from "./dashboard";
export const metadata: Metadata = { title: "Members & My Progress | Fish the Fifty", description: "Your Fish the Fifty member dashboard for states fished, catch logs and private challenge checklists." };
export default function MembersPage() {
  return <main><header className="nav-shell"><div className="nav-wrap"><a className="brand" href="/">FISH THE FIFTY</a><nav aria-label="Main navigation"><a href="/states">States</a><a href="/#challenges">Challenges</a><a href="/members">Members &amp; Progress</a></nav></div></header><section className="page-hero"><div className="page-hero-inner"><p className="eyebrow">YOUR FIFTY · YOUR ADVENTURE</p><h1>Keep every adventure.<br />Build your fifty.</h1><p className="lead">A private place for states fished, memorable catches, and saved challenge checklists. Start with a free membership.</p></div></section><section className="section"><MemberDashboard /></section><footer><strong>FISH THE FIFTY</strong><span>Built for anglers who want to fish farther.</span></footer></main>;
}
