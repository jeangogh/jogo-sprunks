'use client'
import { TOTAL_STEPS } from '@/lib/sprunki/notes'

export default function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div id="step-row">
      {Array.from({ length: TOTAL_STEPS }, (_, i) => <div key={i} className={`sdot ${i === currentStep ? 'on' : ''}`} />)}
    </div>
  )
}
