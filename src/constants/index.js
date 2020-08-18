export const CONNECTING = 'CONNECTING'
export const CONNECT_SUCCESS = 'CONNECT_SUCCESS'
export const CONNECT_FAIL = 'CONNECT_FAIL'
export const DISCONNECT_SUCCESS = 'DISCONNECT_SUCCESS'
export const DISCONNECT_FAIL = 'DISCONNECT_FAIL'

export const BLOCKING = 'BLOCKING'
export const BLOCK_USER_FAIL = 'BLOCK_USER_FAIL'
export const BLOCK_USER_SUCCESS = 'BLOCK_USER_SUCCESS'
export const UNBLOCKING = 'UNBLOCKING'
export const UNBLOCK_USER_FAIL = 'UNBLOCK_USER_FAIL'
export const UNBLOCK_USER_SUCCESS = 'UNBLOCK_USER_SUCCESS'
export const LOADING_FRIEND_LIST = 'LOADING_FRIEND_LIST'
export const FRIEND_LIST_FAIL = 'FRIEND_LIST_FAIL'
export const FRIEND_LIST_SUCCESS = 'FRIEND_LIST_SUCCESS'
export const LOADING_MORE_FRIENDS = 'LOADING_MORE_FRIENDS'
export const LOAD_MORE_FRIENDS_FAIL = 'LOAD_MORE_FRIENDS_FAIL'
export const LOAD_MORE_FRIENDS_SUCCESS = 'LOAD_MORE_FRIENDS_SUCCESS'
export const LOADING_ONLINE_FRIENDS = 'LOADING_ONLINE_FRIENDS'
export const ONLINE_FRIENDS_LIST_FAIL = 'ONLINE_FRIENDS_LIST_FAIL'
export const ONLINE_FRIENDS_LIST_SUCCESS = 'ONLINE_FRIENDS_LIST_SUCCESS'
export const SEARCHING_FRIEND_LIST = 'SEARCHING_FRIEND_LIST'
export const SEARCH_FRIEND_LIST_FAIL = 'SEARCH_FRIEND_LIST_FAIL'
export const SEARCH_FRIEND_LIST_SUCCESS = 'SEARCH_FRIEND_LIST_SUCCESS'

export const LOADING_CONVERSATION_LIST = 'LOADING_CONVERSATION_LIST'
export const CONVERSATION_LIST_FAIL = 'CONVERSATION_LIST_FAIL'
export const CONVERSATION_LIST_SUCCESS = 'CONVERSATION_LIST_SUCCESS'
export const CREATING_CONVERSATION = 'CREATING_CONVERSATION'
export const CREATE_CONVERSATION_FAIL = 'CREATE_CONVERSATION_FAIL'
export const CREATE_CONVERSATION_SUCCESS = 'CREATE_CONVERSATION_SUCCESS'
export const LOADING_LOAD_MORE_CONVERSATIONS = 'LOADING_LOAD_MORE_CONVERSATIONS'
export const LOAD_MORE_CONVERSATIONS_FAIL = 'LOAD_MORE_CONVERSATIONS_FAIL'
export const LOAD_MORE_CONVERSATIONS_SUCCESS = 'LOAD_MORE_CONVERSATIONS_SUCCESS'
export const PROCESS_MUTE_CONVERSATION = 'PROCESS_MUTE_CONVERSATION'
export const MUTE_CONVERSATION_FAIL = 'MUTE_CONVERSATION_FAIL'
export const MUTE_CONVERSATION_SUCCESS = 'MUTE_CONVERSATION_SUCCESS'
export const PROCESS_UNMUTE_CONVERSATION = 'PROCESS_UNMUTE_CONVERSATION'
export const UNMUTE_CONVERSATION_FAIL = 'UNMUTE_CONVERSATION_FAIL'
export const UNMUTE_CONVERSATION_SUCCESS = 'UNMUTE_CONVERSATION_SUCCESS'
export const PROCESS_LEAVE_CONVERSATION = 'PROCESS_LEAVE_CONVERSATION'
export const LEAVE_CONVERSATION_FAIL = 'LEAVE_CONVERSATION_FAIL'
export const LEAVE_CONVERSATION_SUCCESS = 'LEAVE_CONVERSATION_SUCCESS'
export const PROCESS_DELETE_CONVERSATION = 'PROCESS_DELETE_CONVERSATION'
export const DELETE_CONVERSATION_FAIL = 'DELETE_CONVERSATION_FAIL'
export const DELETE_CONVERSATION_SUCCESS = 'DELETE_CONVERSATION_SUCCESS'
export const PROCESS_UPDATE_TITLE = 'PROCESS_UPDATE_TITLE'
export const UPDATE_TITLE_FAIL = 'UPDATE_TITLE_FAIL'
export const UPDATE_TITLE_SUCCESS = 'UPDATE_TITLE_SUCCESS'
export const UPDATING_PROFILE_PHOTO = 'UPDATING_PROFILE_PHOTO'
export const UPDATE_PROFILE_PHOTO_FAIL = 'UPDATE_PROFILE_PHOTO_FAIL'
export const UPDATE_PROFILE_PHOTO_SUCCESS = 'UPDATE_PROFILE_PHOTO_SUCCESS'
export const SEARCHING_GROUPS = 'SEARCHING_GROUPS'
export const SEARCH_GROUPS_FAIL = 'SEARCH_GROUPS_FAIL'
export const SEARCH_GROUPS_SUCCESS = 'SEARCH_GROUPS_SUCCESS'

export const LOADING_MEMBERS = 'LOADING_MEMBERS'
export const LIST_MEMBERS_FAIL = 'LIST_MEMBERS_FAIL'
export const LIST_MEMBERS_SUCCESS = 'LIST_MEMBERS_SUCCESS'
export const ADDING_MEMBERS = 'ADDING_MEMBERS'
export const ADD_MEMBERS_FAIL = 'ADD_MEMBERS_FAIL'
export const ADD_MEMBERS_SUCCESS = 'ADD_MEMBERS_SUCCESS'
export const REMOVING_MEMBERS = 'REMOVING_MEMBERS'
export const REMOVE_MEMBERS_FAIL = 'REMOVE_MEMBERS_FAIL'
export const REMOVE_MEMBERS_SUCCESS = 'REMOVE_MEMBERS_SUCCESS'
export const ADDING_ADMIN = 'ADDING_ADMIN'
export const ADD_ADMIN_FAIL = 'ADD_ADMIN_FAIL'
export const ADD_ADMIN_SUCCESS = 'ADD_ADMIN_SUCCESS'
export const REMOVING_ADMIN = 'REMOVING_ADMIN'
export const REMOVE_ADMIN_FAIL = 'REMOVE_ADMIN_FAIL'
export const REMOVE_ADMIN_SUCCESS = 'REMOVE_ADMIN_SUCCESS'

export const LOADING_MESSAGE_LIST = 'LOADING_MESSAGE_LIST'
export const MESSAGE_LIST_FAIL = 'MESSAGE_LIST_FAIL'
export const MESSAGE_LIST_SUCCESS = 'MESSAGE_LIST_SUCCESS'
export const SENDING_MESSAGE = 'SENDING_MESSAGE'
export const SEND_MESSAGE_FAIL = 'SEND_MESSAGE_FAIL'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SENDING_FILE = 'SENDING_FILE'
export const SEND_FILE_FAIL = 'SEND_FILE_FAIL'
export const SEND_FILE_SUCCESS = 'SEND_FILE_SUCCESS'
export const LOADING_LOAD_MORE_MESSAGES = 'LOADING_LOAD_MORE_MESSAGES'
export const LOAD_MORE_MESSAGES_SUCCESS = 'LOAD_MORE_MESSAGES_SUCCESS'
export const LOAD_MORE_MESSAGES_FAIL = 'LOAD_MORE_MESSAGES_FAIL'
export const SET_ACTIVE_CONVERSATION = 'SET_ACTIVE_CONVERSATION'
export const SET_ACTIVE_USERID = 'SET_ACTIVE_USERID'

export const TYPING_EVENT = 'TYPING_EVENT'
export const NEW_MESSAGE_RECEIVED_EVENT = 'NEW_MESSAGE_RECEIVED_EVENT'
export const USER_STATUS_UPDATED_EVENT = 'USER_STATUS_UPDATED'
export const MARK_AS_READ_EVENT = 'MARK_AS_READ_EVENT'
export const USER_BLOCKED_EVENT = 'USER_BLOCKED_EVENT'
export const USER_UNBLOCKED_EVENT = 'USER_UNBLOCKED_EVENT'
export const USER_JOINED_EVENT = 'USER_JOINED_EVENT'
export const MEMBERS_ADDED_EVENT = 'MEMBERS_ADDED_EVENT'
export const MEMBERS_REMOVED_EVENT = 'MEMBERS_REMOVED_EVENT'
export const CONVERSATION_UPDATED_EVENT = 'CONVERSATION_UPDATED_EVENT'
export const USER_UPDATED_EVENT = 'USER_UPDATED_EVENT'
export const USER_REMOVED_EVENT = 'USER_REMOVED_EVENT'
export const USER_MUTE_UPDATED_EVENT = 'USER_MUTE_UPDATED_EVENT'
export const USER_CONVERSATION_DELETED_EVENT = 'USER_CONVERSATION_DELETED_EVENT'
export const TOTAL_UNREAD_MESSAGE_COUNT_UPDATED_EVENT = 'TOTAL_UNREAD_MESSAGE_COUNT_UPDATED_EVENT'
export const ADMIN_ADDED_EVENT = 'ADMIN_ADDED_EVENT'
export const ADMIN_REMOVED_EVENT = 'ADMIN_REMOVED_EVENT'
