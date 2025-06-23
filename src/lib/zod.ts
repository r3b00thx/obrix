import * as z from "zod";

const Username = z
    .string()
    .nonempty({
        message: "Username is require",
    })
    .trim()
    .min(4, { message: "Username must be at least 4 characters long." })
    .max(16, { message: "Username must not exceed 16 characters." });

const OTP = z
    .number()
    .min(6, { message: "OTP must be at least 6 characters long." })
    .max(6, { message: "OTP must not exceed 6 characters." });

const UUID = z.string().trim().uuid().optional();

const Image = z
    .instanceof(File)
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
        message: "Only JPG, or PNG images are allowed.",
    })
    .optional();
const Content = z
    .string()
    .trim()
    .min(1, "Message must be at least 1 characters long.")
    .max(2600, "Message must not exceed 2600 characters (max 2600 characters).");

const Description = z
    .string()
    .trim()
    .min(1, "Description must be at least 1 characters long.")
    .max(50, "Description must not exceed 50 characters (max 50 characters).");

const Bio = z
    .string()
    .trim()
    .min(1, "Bio must be at least 1 characters long.")
    .max(50, "Bio must not exceed 50 characters (max 50 characters).");

const TextType = z.enum(["text", "image", "file", "gif"]).default("text");

const ChannelType = z.enum(["text", "voice", "announcement"]);

const Title = z
    .string()
    .trim()
    .min(1, "Title must be at least 1 characters long.")
    .max(16, "Title must not exceed 16 characters");

const Tag = z
    .string()
    .trim()
    .min(1, "Tag must be at least 1 characters long.")
    .max(6, "Tag must not exceed 16 characters")
    .startsWith("#");

const Name = z
    .string()
    .trim()
    .min(1, "Name must be at least 1 characters long.")
    .max(16, "Name must not exceed 16 characters");

const Theme = z.enum(["light", "dark", "system"]).default("system");

const Language = z.enum(["en", "ro", "fr", "de"]).default("en");

export const RegisterSchema = z.object({
    username: Username,
    otp: OTP,
});

export const LoginSchema = z.object({
    username: Username,
    otp: OTP,
});

// INFO: bio - Short user biography or status message (max 50 characters)
export const UserSchema = z.object({
    uuid: UUID,
    image: Image,
    username: Username,
    nickname: Name,
    bio: Bio,
    role : z.array(z.string()),
    otp: OTP,
    servers: z.object({
        uuid: UUID,
    }),
    blockedUsers: z.array(
        z.object({
            uuid: UUID,
        })
    ),
});

// INFO: Activity controls whether the user's current activity (e.g., game or app usage) is visible to others
export const UserSettingSchema = z.object({
    theme: Theme,
    language: Language,
    activity: z.boolean().default(false),
    notification: z.boolean().default(false),
});

// INFO: Permission status indicates whether a permission is explicitly allowed, denied, or neutral (inherits default or parent settings)
export const RoleSchema = z.object({
    uuid: UUID,
    name: Name,
    color: z.string(),
    staff: z.boolean().default(false),
    permission: z.array(
        z.object({
            name: Name,
            status: Name,
        })
    ),
});

export const MessageSchema = z.object({
    uuid: UUID,
    senderUuid: UUID,
    channelUuid: UUID,
    content: Content,
    type: TextType,
    replyTo: UUID,
    image: Image,
    pinned: z.boolean().default(false),
    edited: z.boolean().default(false),
});

// INFO: Custom tag set by you to label your server as you want
export const ServerSchema = z.object({
    uuid: UUID,
    ownerUuid: UUID,
    public: z.boolean().default(false),
    Icon: Image,
    banner: Image,
    title: Title,
    description: Description,
    inviteCode:  z.array(z.string().regex(/^[a-zA-Z0-9_-]{6,32}$/, "Invalid invite code.")),
    tag: Tag,
});

export const RuleSchema = z.object({
    uuid: UUID,
    title: Title,
    content: Content,
});

// INFO: Language setting for the server
export const SettingSchema = z.object({
    uuid: UUID,
    allowInvites: z.boolean().default(false),
    language: Language,
});

export const MemberSchema = z.object({
    uuid: UUID,
    banned: z.boolean().default(false),
    ipBanned: z.array(z.string()),
    role: z.array(z.string()),
});

export const ServerRoleSchema = z.object({
    uuid: UUID,
    name: Name,
    color: z.string(),
    permission: z.array(z.string()),
});

// INFO: Sets the type of the channel (e.g., text, voice, announcement)
export const ChannelSchema = z.object({
    uuid: UUID,
    title: Title,
    description: Description,
    category: Title,
    role: z.array(z.string()),
    type: ChannelType,
    permission: z.array(z.string()),
});

export const CategorySchema = z.object({
    uuid: UUID,
    title: Title,
    channels: z.array(z.string()),
    permission: z.array(z.string()),
});
