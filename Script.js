if (Server.getIP() == "eu.mineplex.com" || "us.mineplex.com") {
	TriggerRegister.registerGameLoad("ModLoading")
	
	function ModLoading() {
		ChatLib.chat("&9Mineplex Chats> &7Mod &6loaded")
	}
	
	TriggerRegister.registerCommand("MineplexChats").setCommandName("mineplexchats");
	TriggerRegister.registerCommand("MineplexChats").setCommandName("mineplexchat");
	TriggerRegister.registerCommand("MineplexChats").setCommandName("mc");
	
	var PartyChat = false;
	var TeamChat = false;
	var CommunityChat = false;

	function MineplexChats(arg1, arg2) {
		
		if (arg1 == undefined || null) {
			ChatLib.chat("&9MineplexChats> &7Select the chat you want to join/leave with: &6/mineplexchats party&7, &6/mineplexchats team&7, &6/mineplexchats community");
		} 
		
		if (arg1 == "party") {
			if (TeamChat == true) {
				TeamChat = false;
				ChatLib.chat("&9Mineplex Chats> &7You &aleft &6Team Chat");
				PartyChat = true;
				ChatLib.chat("&9Mineplex Chats> &7You &ajoined &6Party Chat");
			} else {
				if (CommunityChat == true) {
					CommunityChat = false;
					ChatLib.chat("&9Mineplex Chats> &7You &aleft &6Community Chat");
					PartyChat = true;
					ChatLib.chat("&9Mineplex Chats> &7You &ajoined &6Party Chat");
				} else {
					function Party() {
						if (PartyChat == false) {
							PartyChat = true;
							ChatLib.chat("&9Mineplex Chats> &7You &ajoined &6Party Chat");
							return true;
						} else {
							if (PartyChat == true) {
								PartyChat = false;
								ChatLib.chat("&9Mineplex Chats> &7You &aleft &6Party Chat");
							return true;
							}
						}
					}
					Party();
				}
			}
		}
		
		if (arg1 == "team") {
			if (PartyChat == true) {
				PartyChat = false;
				ChatLib.chat("&9Mineplex Chats> &7You &aleft &6Party Chat");
				TeamChat = true;
				ChatLib.chat("&9Mineplex Chats> &7You &ajoined &6Team Chat");
			} else {
				if (CommunityChat == true) {
					CommunityChat = false;
					ChatLib.chat("&9Mineplex Chats> &7You &aleft &6Community Chat");
					TeamChat = true;
					ChatLib.chat("&9Mineplex Chats> &7You &ajoined &6Team Chat");
				} else {
					function Team() {
						if (TeamChat == false) {
							TeamChat = true;
							ChatLib.chat("&9Mineplex Chats> &7You &ajoined &6Team Chat");
							return true;
						} else {
							if (TeamChat == true) {
								TeamChat = false;
								ChatLib.chat("&9Mineplex Chats> &7You &aleft &6Team Chat");
							return true;
							}
						}
					}
					Team();
				}
			}
		}
		
		if (arg1 == "community") {
			if (PartyChat == true) {
				PartyChat = false;
				ChatLib.chat("&9Mineplex Chats> &7You &aleft &6Party Chat");
				CommunityChat = true;
				ChatLib.chat("&9Mineplex Chats> &7You &ajoined &6Community Chat");
			} else {
				if (TeamChat == true) {
					TeamChat = false;
					ChatLib.chat("&9Mineplex Chats> &7You &aleft &6Team Chat");
					CommunityChat = true;
					ChatLib.chat("&9Mineplex Chats> &7You &ajoined &6Community Chat");
				} else {
					function Community() {
						if (CommunityChat == false) {
							Client.setCurrentChatMessage("message");
							CommunityChat = true;
							ChatLib.chat("&9Mineplex Chats> &7You &ajoined &6Community Chat");
							return true;
						} else {
							if (CommunityChat == true) {
								CommunityChat = false;
								ChatLib.chat("&9Mineplex Chats> &7You &aleft &6Community Chat");
							return true;
							}
						}
					}
					Community();
				}
			}
		}
		
	}
	
	var keyT = new KeyBind("TKey", Keyboard.KEY_T);
	
	register("tick", "test");
	function test() {
		if (keyT.isPressed()) {
			if (PartyChat == true) {
				Client.setCurrentChatMessage("@");
			} else {
				if (TeamChat == true) {
					Client.setCurrentChatMessage("#");
				} else {
					if (CommunityChat == true) {
						Client.setCurrentChatMessage("!");
					} else {
						Client.setCurrentChatMessage("");
					}
				}
			}
		}
	}
} else {
	//rip
}