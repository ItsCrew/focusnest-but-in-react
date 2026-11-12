import { Palette, Pencil, Star, Trash2 } from 'lucide-react'
import React from 'react'

const menuItems = [
    { label: 'Edit', icon: Pencil, id: 'edit' },
    { label: 'Set Active', icon: Star, id: 'active' },
    { label: 'Choose Color', icon: Palette, id: 'color' },
    { label: 'Delete', icon: Trash2, id: 'delete', danger: true },
];
const TaskMenu = ({ onDelete, onToggleActive, isActive, onEdit, onChooseColor, onRemoveColor, hasColor }) => {
    return (
        <div className='flex flex-col bg-navbg-dark border border-headings-dark rounded-xl shadow-xl p-1 w-40'>
            {menuItems.map(({ label, icon: Icon, id, danger }) => {
                const getLabel = () => {
                    if (id === 'active') return isActive ? 'Set Inactive' : 'Set Active';
                    if (id === 'color') return hasColor ? 'Remove Color' : 'Choose Color';
                    return label;
                };

                return (
                    <button
                        onClick={() => {
                            if (id === 'delete' && onDelete) onDelete();
                            if (id === 'active' && onToggleActive) onToggleActive();
                            if (id === 'edit' && onEdit) onEdit();
                            if (id === 'color') {
                                if (hasColor && onRemoveColor) onRemoveColor();
                                else if (onChooseColor) onChooseColor();
                            }
                        }}
                        key={id}
                        className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors w-full ${danger
                            ? 'text-red-400 hover:bg-red-500/10'
                            : 'text-neutral-200 hover:bg-white/10'
                            }`}
                    >
                        <Icon size={16} />
                        <span>{getLabel()}</span>
                    </button>
                );
            })}

        </div>
    )
}

export default TaskMenu