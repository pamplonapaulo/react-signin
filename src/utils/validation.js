export const isEmailValid = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
