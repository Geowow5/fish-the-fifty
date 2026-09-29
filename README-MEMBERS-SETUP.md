# Fish the Fifty member accounts

The /members page includes email/password sign-up, confirmation, password recovery, a private state-progress dashboard, catch logs, and manual cloud backup/restore of existing browser checklists. Accounts start free. Membership tier is stored in a read-only profile; a future trusted billing webhook can change it without replacing accounts or progress.

## Activation

1. Create a Supabase project in your own account. Run `supabase/members.sql` once in its SQL Editor.
2. In Supabase Authentication URL Configuration, set Site URL to `https://fish-the-fifty-web.vercel.app` and allow `https://fish-the-fifty-web.vercel.app/members` and `https://fish-the-fifty-web.vercel.app/members?recovery=1` as redirect URLs. Add the custom production domain if one is used. Leave email confirmations enabled. Require a password of at least 12 characters in Auth settings.
3. Add these Vercel production environment variables from the Supabase project Connect dialog:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   These are public client configuration; never use a secret or service-role key here.
4. Redeploy after adding variables. Configure a production email sender in Supabase for reliable confirmation and reset emails; review its current email limits before launch.
5. Verify sign-up, confirmation, sign-in, password recovery, sign-out, saved catches and device restore with test accounts. Test account A cannot read, insert, update or delete account B's rows in all four tables. Verify users cannot change membership_tier.

## Privacy and current scope

Database row-level policies enforce ownership using auth.uid(). Anonymous users have no table access. Member profiles permit only reads from the member client; premium cannot be self-assigned. No payment fields, public profiles, uploads or admin credentials are included. Browser-local checklists remain available without an account. Backups and restore require explicit confirmation and are not automatic sync; state milestones are user-recorded and do not certify official awards. Catch list displays the latest 200 entries; all entries remain in the database.

Without configuration the public member page clearly displays an activation-pending preview and collects no credentials. Cloud flows and database isolation must be tested on a provisioned project before launch. Password reset links land on /members and Supabase's recovery event opens the new-password form.
