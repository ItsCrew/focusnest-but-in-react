import React, { useState, useRef, useEffect } from 'react'
import { Square, Check, ChevronDown, MoreVertical } from 'lucide-react'
import TaskMenu from './TaskMenu'
import { useTasks } from '../../Context/TasksContext'

const TaskItem = ({ task }) => {
  const [priority, setPriority] = useState(task.priority || 'P0')
  const [priorityOpen, setPriorityOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [contextMenuPos, setContextMenuPos] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.task)
  const colorInputRef = useRef(null)

  const { toggleTask, deleteTask, toggleActiveTask, editTask, setTaskColor } = useTasks()

  useEffect(() => {
    setEditText(task.task)
  }, [task.task])

  const priorityStyles = {
    P0: 'bg-red-500/20 border-red-400 text-red-400',
    P1: 'bg-amber-500/20 border-amber-400 text-amber-400',
    P2: 'bg-gray-500/20 border-gray-400 text-gray-400',
  }

  const handleDelete = () => {
    deleteTask(task.id)
    setMenuOpen(false)
    setContextMenuPos(null)
  }

  const handleToggleActive = () => {
    toggleActiveTask(task.id)
    setMenuOpen(false)
    setContextMenuPos(null)
  }

  const handleEdit = () => {
    setIsEditing(true)
    setMenuOpen(false)
    setContextMenuPos(null)
  }

  const handleSaveEdit = () => {
    const trimmed = editText.trim()
    if (trimmed && trimmed !== task.task) {
      editTask(task.id, trimmed)
    } else {
      setEditText(task.task)
    }
    setIsEditing(false)
  }

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') handleSaveEdit()
    if (e.key === 'Escape') {
      setEditText(task.task)
      setIsEditing(false)
    }
  }

  const handleChooseColor = () => {
    setMenuOpen(false)
    setContextMenuPos(null)
    colorInputRef.current?.click()
  }

  const handleRemoveColor = () => {
    setTaskColor(task.id, '')
    setMenuOpen(false)
    setContextMenuPos(null)
  }

  const handleColorChange = (e) => {
    setTaskColor(task.id, e.target.value)
  }

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault()
        setContextMenuPos({ x: e.clientX, y: e.clientY })
        setMenuOpen(false)
        setPriorityOpen(false)
      }}
      style={task.color ? { backgroundColor: task.color } : undefined}
      className={`flex justify-between px-3 sm:px-4 border border-headings-dark ${task.color ? '' : 'hover:bg-white/5'} transition-all rounded-[10px] h-12 items-center text-[15px] sm:text-[16px] gap-1 sm:gap-2`}
    >
      {/* Hidden native color picker */}
      <input
        ref={colorInputRef}
        type="color"
        value={task.color || '#6b8f71'}
        onChange={handleColorChange}
        className="hidden"
      />

      <div className="flex items-center gap-2 flex-1 min-w-0 mr-1 sm:mr-2">
        <div
          onClick={() => toggleTask(task.id)}
          className={`w-4.5 h-4.5 rounded-md border-2 flex items-center justify-center cursor-pointer transition-all duration-200 shrink-0 ${
            task.completed
              ? 'bg-headings-dark border-headings-dark text-white'
              : 'border-headings-dark/60 hover:border-headings-dark'
          }`}
        >
          {task.completed && <Check size={12} strokeWidth={3.5} />}
        </div>

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleEditKeyDown}
            onBlur={handleSaveEdit}
            autoFocus
            className="bg-transparent border-b border-headings-dark text-font-dark focus:outline-none text-[16px] px-1 py-0.5 w-full"
          />
        ) : (
          <p
            className={`transition-all duration-200 truncate ${
              task.completed ? 'line-through text-neutral-400 opacity-60' : 'text-font-dark'
            }`}
          >
            {task.task}
          </p>
        )}
      </div>

      <div className="ml-auto shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div
              onClick={() => {
                setPriorityOpen(!priorityOpen)
                setContextMenuPos(null)
                setMenuOpen(false)
              }}
              className={`flex justify-center items-center h-7.5 sm:h-8 min-w-13 sm:min-w-15 px-1.5 sm:px-2 rounded-[15px] border-2 cursor-pointer select-none font-semibold text-xs sm:text-sm transition-all ${priorityStyles[priority]} ${
                task.completed ? 'opacity-40 pointer-events-none' : 'opacity-100'
              }`}
            >
              <span>{priority}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${priorityOpen ? 'rotate-180' : ''}`} />
            </div>
            {priorityOpen && (
              <>
                <div onClick={() => setPriorityOpen(false)} className="fixed inset-0 z-20" />
                <div className="absolute top-full left-0 mt-1.5 w-full bg-navbg-dark border border-headings-dark rounded-xl overflow-hidden shadow-xl z-20">
                  <div onClick={() => { setPriority('P0'); setPriorityOpen(false); }} className="px-3 py-2 text-center font-semibold text-sm text-red-400 hover:bg-white/10 cursor-pointer">P0</div>
                  <div onClick={() => { setPriority('P1'); setPriorityOpen(false); }} className="px-3 py-2 text-center font-semibold text-sm text-amber-400 hover:bg-white/10 cursor-pointer">P1</div>
                  <div onClick={() => { setPriority('P2'); setPriorityOpen(false); }} className="px-3 py-2 text-center font-semibold text-sm text-gray-400 hover:bg-white/10 cursor-pointer">P2</div>
                </div>
              </>
            )}
          </div>
          <div className="relative">
            <MoreVertical
              onClick={() => {
                setMenuOpen(!menuOpen)
                setContextMenuPos(null)
                setPriorityOpen(false)
              }}
              className="cursor-pointer text-neutral-400 hover:text-white transition-colors"
            />
            {menuOpen && (
              <>
                <div onClick={() => setMenuOpen(false)} className="fixed inset-0 z-20" />
                <div className="absolute top-full right-0 mt-1.5 z-30">
                  <TaskMenu
                    onDelete={handleDelete}
                    onToggleActive={handleToggleActive}
                    isActive={task.isActive}
                    onEdit={handleEdit}
                    onChooseColor={handleChooseColor}
                    onRemoveColor={handleRemoveColor}
                    hasColor={Boolean(task.color)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {contextMenuPos && (
        <>
          <div
            onClick={() => setContextMenuPos(null)}
            onContextMenu={(e) => {
              e.preventDefault()
              setContextMenuPos(null)
            }}
            className="fixed inset-0 z-40"
          />
          <div style={{ top: contextMenuPos.y, left: contextMenuPos.x }} className="fixed z-50">
            <TaskMenu
              onDelete={handleDelete}
              onToggleActive={handleToggleActive}
              isActive={task.isActive}
              onEdit={handleEdit}
              onChooseColor={handleChooseColor}
              onRemoveColor={handleRemoveColor}
              hasColor={Boolean(task.color)}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default TaskItem