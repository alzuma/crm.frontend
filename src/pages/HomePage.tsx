import { useEffect, useState } from 'react'
import { getHealth } from '../api/client'

type BackendStatus = 'checking' | 'online' | 'offline'

const statusLabel: Record<BackendStatus, string> = {
  checking: 'checking',
  online: 'online',
  offline: 'unreachable',
}

export function HomePage() {
  const [status, setStatus] = useState<BackendStatus>('checking')

  useEffect(() => {
    let cancelled = false
    getHealth()
      .then(() => {
        if (!cancelled) setStatus('online')
      })
      .catch(() => {
        if (!cancelled) setStatus('offline')
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="home">
      <h1>Simple CRM</h1>
      <p>Frontend scaffold is up. Feature pages land here as the project is built out.</p>
      <p className="home-status">
        Backend status: <span>{statusLabel[status]}</span>
      </p>
    </section>
  )
}
