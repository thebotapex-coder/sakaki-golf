'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Plus, Target, Clock, CheckCircle, Circle, Trash2, ChevronDown, ChevronUp } from 'lucide-react'

type DrillItem = {
  id: string
  name: string
  duration: number
  completed: boolean
}

type PracticeSession = {
  id: string
  name: string
  focus: string
  drills: DrillItem[]
  expanded: boolean
}

const focusAreas = ['Driving', 'Iron Play', 'Short Game', 'Putting', 'Course Management', 'Fitness']

const defaultDrills: Record<string, string[]> = {
  Driving: ['10-ball alignment drill', 'Tempo swing slow-motion', 'Target accuracy (fairway width)', 'Tee height experiment'],
  'Iron Play': ['9-ball dispersion drill', '7-iron 50% power shots', 'Divot direction check', 'Ball-turf contact drill'],
  'Short Game': ['Chip and run from 20 yds', 'Sand bunker 10-ball drill', 'Flop shot practice', '50/60/70 yd pitches'],
  Putting: ['Gate drill (pencils)', '3-foot confidence circle', '20-foot lag putts x10', 'Slope reading drill'],
  'Course Management': ['Mental rehearsal round', 'Shot decision tree', 'Scoring zone practice', 'Penalty avoidance game'],
  Fitness: ['Hip rotation stretches', 'Core activation warm-up', 'Balance drills', 'Wrist & forearm mobility'],
}

function generateId() {
  return Math.random().toString(36).slice(2, 9)
}

export default function PracticePlannerPage() {
  const [sessions, setSessions] = useState<PracticeSession[]>([
    {
      id: generateId(),
      name: 'Morning Range Session',
      focus: 'Driving',
      expanded: true,
      drills: [
        { id: generateId(), name: '10-ball alignment drill', duration: 10, completed: false },
        { id: generateId(), name: 'Tempo swing slow-motion', duration: 15, completed: false },
        { id: generateId(), name: 'Target accuracy (fairway width)', duration: 20, completed: false },
      ],
    },
  ])

  const [newSessionName, setNewSessionName] = useState('')
  const [newSessionFocus, setNewSessionFocus] = useState('Driving')
  const [showAddSession, setShowAddSession] = useState(false)

  const totalMinutes = sessions.flatMap(s => s.drills).reduce((acc, d) => acc + d.duration, 0)
  const completedDrills = sessions.flatMap(s => s.drills).filter(d => d.completed).length
  const totalDrills = sessions.flatMap(s => s.drills).length

  const addSession = () => {
    if (!newSessionName.trim()) return
    const suggested = (defaultDrills[newSessionFocus] || []).slice(0, 3).map(name => ({
      id: generateId(),
      name,
      duration: 15,
      completed: false,
    }))
    setSessions(prev => [...prev, {
      id: generateId(),
      name: newSessionName,
      focus: newSessionFocus,
      drills: suggested,
      expanded: true,
    }])
    setNewSessionName('')
    setShowAddSession(false)
  }

  const toggleSession = (id: string) => {
    setSessions(prev => prev.map(s => s.id === id ? { ...s, expanded: !s.expanded } : s))
  }

  const deleteSession = (id: string) => {
    setSessions(prev => prev.filter(s => s.id !== id))
  }

  const toggleDrill = (sessionId: string, drillId: string) => {
    setSessions(prev => prev.map(s =>
      s.id === sessionId
        ? { ...s, drills: s.drills.map(d => d.id === drillId ? { ...d, completed: !d.completed } : d) }
        : s
    ))
  }

  const addDrill = (sessionId: string) => {
    setSessions(prev => prev.map(s =>
      s.id === sessionId
        ? { ...s, drills: [...s.drills, { id: generateId(), name: 'New drill', duration: 10, completed: false }] }
        : s
    ))
  }

  const updateDrillName = (sessionId: string, drillId: string, name: string) => {
    setSessions(prev => prev.map(s =>
      s.id === sessionId
        ? { ...s, drills: s.drills.map(d => d.id === drillId ? { ...d, name } : d) }
        : s
    ))
  }

  const updateDrillDuration = (sessionId: string, drillId: string, duration: number) => {
    setSessions(prev => prev.map(s =>
      s.id === sessionId
        ? { ...s, drills: s.drills.map(d => d.id === drillId ? { ...d, duration } : d) }
        : s
    ))
  }

  const deleteDrill = (sessionId: string, drillId: string) => {
    setSessions(prev => prev.map(s =>
      s.id === sessionId
        ? { ...s, drills: s.drills.filter(d => d.id !== drillId) }
        : s
    ))
  }

  return (
    <>
      <Navigation />

      {/* Header */}
      <div className="pt-24 pb-0 bg-[#1c1c1c]">
        <div className="container mx-auto px-6 pt-8 pb-8">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#3d5a3e] font-bold mb-2">Sakaki Golf</p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">
            Practice Planner
          </h1>
          <p className="text-[#8a8a8a] text-sm max-w-lg">
            Build focused practice sessions, track drills, and build consistent habits on the range.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[#2a3d2b] border-b border-[#3d5a3e]/40">
        <div className="container mx-auto px-6 py-4 flex flex-wrap gap-8">
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-[#8ab88c]" />
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#8ab88c] font-bold">Total Time</p>
              <p className="text-lg font-black text-white">{totalMinutes} min</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Target size={16} className="text-[#8ab88c]" />
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#8ab88c] font-bold">Drills</p>
              <p className="text-lg font-black text-white">{completedDrills}/{totalDrills}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={16} className="text-[#8ab88c]" />
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#8ab88c] font-bold">Progress</p>
              <p className="text-lg font-black text-white">
                {totalDrills > 0 ? Math.round((completedDrills / totalDrills) * 100) : 0}%
              </p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="flex-1 min-w-[120px] flex items-center">
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#d4b896] transition-all duration-500"
                style={{ width: `${totalDrills > 0 ? (completedDrills / totalDrills) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="min-h-screen bg-[#f5f0e8] py-10">
        <div className="container mx-auto px-6 max-w-3xl">

          {/* Sessions */}
          <div className="space-y-4 mb-8">
            {sessions.map((session) => {
              const sessionCompleted = session.drills.filter(d => d.completed).length
              const sessionTotal = session.drills.length
              const sessionMins = session.drills.reduce((a, d) => a + d.duration, 0)

              return (
                <div key={session.id} className="bg-white border border-[#e2ddd6] overflow-hidden">
                  {/* Session header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-[#e2ddd6]">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <button onClick={() => toggleSession(session.id)} className="text-[#8a8a8a] hover:text-[#1c1c1c] transition-colors flex-shrink-0">
                        {session.expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-black text-[#1c1c1c] text-sm uppercase tracking-wide truncate">{session.name}</h3>
                          <span className="text-[9px] tracking-[0.12em] uppercase font-bold bg-[#3d5a3e] text-white px-2 py-0.5 flex-shrink-0">
                            {session.focus}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8a8a8a] mt-0.5">
                          {sessionCompleted}/{sessionTotal} drills · {sessionMins} min
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteSession(session.id)}
                      className="text-[#c0bdb8] hover:text-red-400 transition-colors ml-4 flex-shrink-0"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  {/* Drills */}
                  {session.expanded && (
                    <div className="divide-y divide-[#f0ede8]">
                      {session.drills.map((drill) => (
                        <div key={drill.id} className={`flex items-center gap-3 px-5 py-3 transition-colors ${drill.completed ? 'bg-[#f5f0e8]' : 'bg-white'}`}>
                          <button
                            onClick={() => toggleDrill(session.id, drill.id)}
                            className={`flex-shrink-0 transition-colors ${drill.completed ? 'text-[#3d5a3e]' : 'text-[#c0bdb8] hover:text-[#3d5a3e]'}`}
                          >
                            {drill.completed ? <CheckCircle size={18} /> : <Circle size={18} />}
                          </button>
                          <input
                            type="text"
                            value={drill.name}
                            onChange={(e) => updateDrillName(session.id, drill.id, e.target.value)}
                            className={`flex-1 text-sm bg-transparent border-none focus:outline-none min-w-0 ${drill.completed ? 'line-through text-[#8a8a8a]' : 'text-[#1c1c1c]'}`}
                          />
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <input
                              type="number"
                              value={drill.duration}
                              onChange={(e) => updateDrillDuration(session.id, drill.id, Number(e.target.value))}
                              className="w-12 text-center text-[12px] font-bold text-[#5a5a5a] bg-[#f0ede8] border border-[#e2ddd6] py-1 focus:outline-none focus:border-[#3d5a3e]"
                              min={1}
                            />
                            <span className="text-[10px] text-[#8a8a8a] uppercase tracking-wide">min</span>
                          </div>
                          <button
                            onClick={() => deleteDrill(session.id, drill.id)}
                            className="text-[#c0bdb8] hover:text-red-400 transition-colors flex-shrink-0"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      ))}

                      {/* Add drill */}
                      <div className="px-5 py-3 bg-[#f5f0e8]">
                        <button
                          onClick={() => addDrill(session.id)}
                          className="flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase font-bold text-[#3d5a3e] hover:text-[#2a3d2b] transition-colors"
                        >
                          <Plus size={14} />
                          Add Drill
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Add Session */}
          {showAddSession ? (
            <div className="bg-white border border-[#3d5a3e] p-6 mb-4">
              <h3 className="text-[12px] tracking-[0.1em] uppercase font-black text-[#1c1c1c] mb-5">New Session</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-bold text-[#8a8a8a] mb-2">Session Name</label>
                  <input
                    type="text"
                    value={newSessionName}
                    onChange={(e) => setNewSessionName(e.target.value)}
                    placeholder="e.g. Thursday Range Session"
                    className="w-full border border-[#e2ddd6] px-4 py-3 text-sm focus:outline-none focus:border-[#3d5a3e] transition-colors"
                    onKeyDown={(e) => e.key === 'Enter' && addSession()}
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.15em] uppercase font-bold text-[#8a8a8a] mb-2">Focus Area</label>
                  <select
                    value={newSessionFocus}
                    onChange={(e) => setNewSessionFocus(e.target.value)}
                    className="w-full border border-[#e2ddd6] px-4 py-3 text-sm focus:outline-none focus:border-[#3d5a3e] transition-colors bg-white appearance-none"
                  >
                    {focusAreas.map(f => <option key={f}>{f}</option>)}
                  </select>
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={addSession} className="bg-[#1c1c1c] text-white text-[11px] font-bold tracking-[0.1em] uppercase px-6 py-3 hover:bg-[#3d5a3e] transition-colors">
                    Create Session
                  </button>
                  <button onClick={() => setShowAddSession(false)} className="text-[11px] font-bold tracking-[0.1em] uppercase px-6 py-3 border border-[#e2ddd6] text-[#8a8a8a] hover:border-[#1c1c1c] hover:text-[#1c1c1c] transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowAddSession(true)}
              className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-[#c0bdb8] py-5 text-[12px] font-bold tracking-[0.1em] uppercase text-[#8a8a8a] hover:border-[#3d5a3e] hover:text-[#3d5a3e] transition-colors"
            >
              <Plus size={16} />
              Add Practice Session
            </button>
          )}

          {/* Focus area quick-add */}
          <div className="mt-10">
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#8a8a8a] mb-4">Quick Add by Focus Area</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {focusAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => {
                    const drills = (defaultDrills[area] || []).slice(0, 3).map(name => ({
                      id: generateId(), name, duration: 15, completed: false,
                    }))
                    setSessions(prev => [...prev, {
                      id: generateId(),
                      name: `${area} Session`,
                      focus: area,
                      drills,
                      expanded: true,
                    }])
                  }}
                  className="bg-white border border-[#e2ddd6] px-4 py-3 text-[11px] font-bold tracking-[0.08em] uppercase text-[#5a5a5a] hover:border-[#3d5a3e] hover:text-[#3d5a3e] transition-colors text-left flex items-center gap-2"
                >
                  <Plus size={12} />
                  {area}
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-[11px] text-[#c0bdb8] mt-10 tracking-wide">
            More features coming soon — goal tracking, round logging, and progress history.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
