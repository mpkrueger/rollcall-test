import { getSession } from "next-auth/client";
import { createOrganization } from "../../lib/api";

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    const { name } = req.body;

    if (!name) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    const organizationId = await createOrganization(name, session.user.email);

    res.status(200).json({ organizationId });
}