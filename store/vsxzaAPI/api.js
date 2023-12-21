import axios from "axios"
const vsxzaAPI = axios.create({
  baseURL: "https://vsxza-45160.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return vsxzaAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return vsxzaAPI.post(`/api/v1/login/`, payload)
}
function api_v1_organization_list(payload) {
  return vsxzaAPI.get(`/api/v1/organization/`)
}
function api_v1_organization_create(payload) {
  return vsxzaAPI.post(`/api/v1/organization/`, payload)
}
function api_v1_organization_retrieve(payload) {
  return vsxzaAPI.get(`/api/v1/organization/${payload.id}/`)
}
function api_v1_organization_update(payload) {
  return vsxzaAPI.put(`/api/v1/organization/${payload.id}/`, payload)
}
function api_v1_organization_partial_update(payload) {
  return vsxzaAPI.patch(`/api/v1/organization/${payload.id}/`, payload)
}
function api_v1_organization_destroy(payload) {
  return vsxzaAPI.delete(`/api/v1/organization/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return vsxzaAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return vsxzaAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return vsxzaAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return vsxzaAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return vsxzaAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return vsxzaAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return vsxzaAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return vsxzaAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return vsxzaAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return vsxzaAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return vsxzaAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return vsxzaAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_organization_list,
  api_v1_organization_create,
  api_v1_organization_retrieve,
  api_v1_organization_update,
  api_v1_organization_partial_update,
  api_v1_organization_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}