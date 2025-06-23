import * as z from "zod";

const uuid = z.string().trim().uuid().optional();

const username = z
    .string()
    .nonempty({
        message: "Username is required.",
    })
    .trim()
    .min(4, { message: "Username must be at least 4 characters long." })
    .max(16, { message: "Username must not exceed 16 characters." });

const otp = z
    .number()
    .min(6, { message: "OTP must be a 6-digit number." })
    .max(6, { message: "OTP must be a 6-digit number." });

const image = z
    .instanceof(File)
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
        message: "Only JPG or PNG images are allowed.",
    })
    .optional();
const content = z
    .string()
    .trim()
    .min(6, "Message must be at least 6 characters long.")
    .max(2600, "Message must not exceed 2600 characters.");

const description = z
    .string()
    .trim()
    .min(12, "Description must be at least 12 characters long.")
    .max(50, "Description must not exceed 50 characters.");

const bio = z
    .string()
    .trim()
    .min(3, "Bio must be at least 3 characters long.")
    .max(50, "Bio must not exceed 50 characters.");

const TextType = z.enum(["text", "image", "file", "gif"]).default("text");

const ChannelType = z.enum(["text", "voice", "announcement"]);

const title = z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters long.")
    .max(16, "Title must not exceed 16 characters.");

const Tag = z
    .string()
    .trim()
    .min(3, "Tag must be at least 3 characters long.")
    .max(6, "Tag must not exceed 16 characters.")
    .startsWith("#");

const name = z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long.")
    .max(16, "Name must not exceed 16 characters.");

const theme = z.enum(["light", "dark", "system"]).default("system");

const language = z.enum(["en", "ro", "fr", "de"]).default("en");

const action = z.enum(["deny", "none", "accept"]).default("none")

export const RegisterSchema = z.object({
    username,
    otp,
});

export const LoginSchema = z.object({
    username,
    otp,
});

// INFO: bio - Short user biography or status message (max 50 characters)
export const UserSchema = z.object({
    uuid,
    image,
    username,
    nickname: name,
    bio,
    role: name,
    otp,
    servers: z.object({
        uuid,
    }),
    blockedUsers: z.array(
        z.object({
            uuid,
        })
    ),
});

// INFO: Activity controls whether the user's current activity (e.g., game or app usage) is visible to others
export const UserSettingSchema = z.object({
    theme,
    language,
    activity: z.boolean().default(false),
    notification: z.boolean().default(false),
});

// INFO: Permission status indicates whether a permission is explicitly allowed, denied, or neutral (inherits default or parent settings)
export const RoleSchema = z.object({
    uuid,
    name,
    color: z.string(),
    staff: z.boolean().default(false),
    permissions: z.array(
        z.object({
            name,
            action,
        })
    ),
});

export const MessageSchema = z.object({
    uuid,
    senderUUID: uuid,
    channelUUID: uuid,
    content,
    type: TextType,
    replyTo: uuid,
    image,
    pinned: z.boolean().default(false),
    edited: z.boolean().default(false),
});

// INFO: Custom tag set by you to label your server as you want
export const ServerSchema = z.object({
    uuid,
    ownerUUID: uuid,
    public: z.boolean().default(false),
    Icon: image,
    banner: image,
    title,
    description,
    inviteCode: z.array(z.string().regex(/^[a-zA-Z0-9_-]{6,32}$/, "Invalid invite code.")),
    tag: Tag,
});

export const RuleSchema = z.object({
    uuid,
    title,
    content,
});

// INFO: Sets the interface and system message language for the entire server.
export const SettingSchema = z.object({
    uuid,
    allowInvites: z.boolean().default(false),
    language,
});

// INFO: ipBanned sets the IPs of the banned member.
export const MemberSchema = z.object({
    uuid,
    banned: z.boolean().default(false),
    ipBanned: z.array(z.string()).optional(),
    role: z.array(z.string()),
});

export const ServerRoleSchema = z.object({
    uuid,
    name,
    color: z.string(),
    permissions: z.array(
        z.object({
            name,
            action,
        })
    ),
});

// INFO: Type Sets the type of the channel (e.g., text, voice, announcement)
export const ChannelSchema = z.object({
    uuid,
    title,
    description,
    category: title,
    role: z.array(z.string()),
    type: ChannelType,
    permissions: z.array(
        z.object({
            name,
            action,
        })
    ),
});

export const CategorySchema = z.object({
    uuid,
    title,
    channels: z.array(z.string()),
    permissions: z.array(
        z.object({
            name,
            action,
        })
    ),
});
