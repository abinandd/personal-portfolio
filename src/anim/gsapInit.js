import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initGlobalAnimations() {
  if (typeof window === 'undefined') return
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  // Fade-up for sections
  gsap.utils.toArray('[data-animate="section"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%'
      }
    })
  })

  // Stagger for cards
  gsap.utils.toArray('[data-animate="card-list"]').forEach((list) => {
    const items = list.querySelectorAll('[data-animate="card"]')
    gsap.from(items, {
      opacity: 0,
      y: 16,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: list,
        start: 'top 85%'
      }
    })
  })

  // Split words and reveal
  gsap.utils.toArray('[data-split="words"]').forEach((el) => {
    const original = el.textContent
    const html = original
      .trim()
      .split(/\s+/)
      .map((w) => `<span class="ws" style="display:inline-block;will-change:transform">${w}&nbsp;</span>`) 
      .join('')
    el.setAttribute('data-split-applied', 'true')
    el.innerHTML = html
    const nodes = el.querySelectorAll('.ws')
    gsap.from(nodes, {
      opacity: 0,
      y: 10,
      duration: 0.55,
      ease: 'power2.out',
      stagger: 0.035,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    })
  })

  // Timeline items slide with slight skew
  gsap.utils.toArray('[data-animate="timeline"] li').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      x: -18,
      skewX: 3,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: item, start: 'top 85%' }
    })
  })

  // Image hover pan
  gsap.utils.toArray('[data-hover-pan]').forEach((img) => {
    const onMove = (e) => {
      const r = img.getBoundingClientRect()
      const dx = (e.clientX - r.left) / r.width - 0.5
      const dy = (e.clientY - r.top) / r.height - 0.5
      gsap.to(img, { x: dx * 8, y: dy * 8, scale: 1.06, duration: 0.25, ease: 'power2.out' })
    }
    const onLeave = () => gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' })
    img.addEventListener('mousemove', onMove)
    img.addEventListener('mouseleave', onLeave)
  })

  // Subtle parallax on hero image
  const heroImg = document.querySelector('[data-hero-img]')
  if (heroImg) {
    gsap.to(heroImg, {
      yPercent: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: heroImg,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.3
      }
    })
  }

  // Hover tilt for cards
  gsap.utils.toArray('[data-tilt]').forEach((el) => {
    const rotateX = gsap.quickTo(el, 'rotateX', { duration: 0.3, ease: 'power2.out' })
    const rotateY = gsap.quickTo(el, 'rotateY', { duration: 0.3, ease: 'power2.out' })
    const lift = gsap.quickTo(el, 'y', { duration: 0.3, ease: 'power2.out' })
    el.style.transformStyle = 'preserve-3d'
    el.style.transformPerspective = '800px'
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      rotateX(gsap.utils.clamp(-6, 6, -dy * 8))
      rotateY(gsap.utils.clamp(-6, 6, dx * 8))
      lift(-4)
    }
    const onLeave = () => {
      rotateX(0); rotateY(0); lift(0)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
  })

  // Floating social icons
  const floats = gsap.utils.toArray('[data-float]')
  if (floats.length) {
    floats.forEach((node, i) => {
      gsap.to(node, {
        y: 3,
        duration: 1.6 + (i % 3) * 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: (i % 5) * 0.1,
      })
    })
  }

  // Top scroll progress bar
  const bar = document.createElement('div')
  bar.setAttribute('aria-hidden', 'true')
  bar.style.cssText = 'position:fixed;inset-inline-start:0;inset-block-start:0;height:2px;background:#3b82f6;width:0;z-index:60;'
  document.body.appendChild(bar)
  gsap.to(bar, {
    width: '100%',
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
  })
}

