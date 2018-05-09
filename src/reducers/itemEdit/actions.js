export const EDIT_TITLE = 'EDIT_TITLE'
export const EDIT_DESCRIPTION = 'EDIT_DESCRIPTION'
export const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION'
export const RESET_FIELDS = 'RESET_FIELDS'

export function editTitle(title) {
  return { type: EDIT_TITLE, title }
}

export function editDescription(description) {
  return { type: EDIT_DESCRIPTION, description }
}

export function toggleCompletion() {
  return { type: TOGGLE_COMPLETION }
}

export function resetFields() {
  return { type: RESET_FIELDS }
}
