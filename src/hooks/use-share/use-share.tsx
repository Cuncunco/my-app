import { useCallback, useMemo } from "react"
import { Link } from "lucide-react"
import { ShareConfig, SocialProvider, SOCIAL_PROVIDERS } from "./social-providers"
import { useClipboard } from "../use-clipboard"

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number
}

type ShareButton = {
  provider: SocialProvider | "clipboard"
  name: string
  icon: React.ReactNode
  action: () => void
}

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) => {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout })

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  )

  // 🔹 Compartilhamento social (SEM clipboard)
  const shareSocial = useCallback(
    (provider: SocialProvider) => {
      const providerConfig = SOCIAL_PROVIDERS[provider]

      if (!providerConfig) {
        console.error("Provider não suportado:", provider)
        return
      }

      const shareUrl = providerConfig.shareUrl(shareConfig)
      window.open(
        shareUrl,
        "_blank",
        "width=600,height=600,location=yes,status=yes"
      )
    },
    [shareConfig]
  )

  // 🔹 Botões (sociais + clipboard)
  const shareButtons = useMemo<ShareButton[]>(() => {
    const socialButtons = Object.entries(SOCIAL_PROVIDERS).map(
      ([key, provider]) => ({
        provider: key as SocialProvider,
        name: provider.name,
        icon: provider.icon,
        action: () => shareSocial(key as SocialProvider),
      })
    )

    const clipboardButton: ShareButton = {
      provider: "clipboard",
      name: isCopied ? "Link copiado!" : "Copiar link",
      icon: <Link className="h-4 w-4" />,
      action: () => handleCopy(url),
    }

    return [...socialButtons, clipboardButton]
  }, [shareSocial, handleCopy, url, isCopied])

  return { shareButtons }
}
