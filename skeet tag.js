UI.AddDropdown( "Custom ClanTag", [ "Disabled", "gamesense", "niggerware", "onetap.su", "FlowHooks", "AIMJUNKIES", "skeet.cc", "8====D", "fatality"] );
UI.AddSliderInt( "Custom ClanTag Speed", 1, 10 );
var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( "Script Items", "Custom ClanTag" );
    var speed = UI.GetValue( "Script Items", "Custom ClanTag Speed" );
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
        if(tag == 0) { Local.SetClanTag(""); }
        if(tag == 1)
            {
            switch((time) % 27)
            {
            case 0: { Local.SetClanTag("                  "); break; }
            case 1: { Local.SetClanTag("                ga"); break; }
            case 2: { Local.SetClanTag("               gam"); break; }
            case 3: { Local.SetClanTag("              game"); break; }
            case 4: { Local.SetClanTag("             games"); break; }
            case 5: { Local.SetClanTag("            gamese"); break; }
            case 6: { Local.SetClanTag("           gamesen"); break; }
            case 7: { Local.SetClanTag("          gamesens"); break; }
            case 8: { Local.SetClanTag("         gamesense"); break; }
            case 9: { Local.SetClanTag("        gamesense "); break; }
            case 10:{ Local.SetClanTag("       gamesense  "); break; }
            case 11:{ Local.SetClanTag("      gamesense   "); break; }
            case 12:{ Local.SetClanTag("     gamesense    "); break; }
            case 13:{ Local.SetClanTag("    gamesense     "); break; }
            case 14:{ Local.SetClanTag("   gamesense      "); break; }
            case 15:{ Local.SetClanTag("  gamesense       "); break; }
            case 16:{ Local.SetClanTag(" gamesense        "); break; }
            case 17:{ Local.SetClanTag("gamesense         "); break; }
            case 18:{ Local.SetClanTag("amesense          "); break; }
            case 19:{ Local.SetClanTag("mesense           "); break; }
            case 20:{ Local.SetClanTag("esense            "); break; }
            case 21:{ Local.SetClanTag("sense             "); break; }
            case 22:{ Local.SetClanTag("ense              "); break; }
            case 23:{ Local.SetClanTag("nse               "); break; }
            case 24:{ Local.SetClanTag("se                "); break; }
            case 25:{ Local.SetClanTag("e                 "); break; }
			case 26:{ Local.SetClanTag("                  "); break; }
            }
        }
    if(tag == 2)
            {
            switch((time) % 28)
            {
                case 0: { Local.SetClanTag("                  "); break; }
                case 1: { Local.SetClanTag("                 n"); break; }
                case 2: { Local.SetClanTag("                ni"); break; }
                case 3: { Local.SetClanTag("               nig"); break; }
                case 4: { Local.SetClanTag("              nigg"); break; }
                case 5: { Local.SetClanTag("             nigge"); break; }
                case 6: { Local.SetClanTag("            nigger"); break; }
                case 7: { Local.SetClanTag("           niggerw"); break; }
                case 8: { Local.SetClanTag("          niggerwa"); break; }
                case 9: { Local.SetClanTag("         niggerwar"); break; }
                case 10:{ Local.SetClanTag("        niggerware"); break; }
                case 11:{ Local.SetClanTag("       niggerware "); break; }
                case 12:{ Local.SetClanTag("      niggerware  "); break; }
                case 13:{ Local.SetClanTag("     niggerware   "); break; }
                case 14:{ Local.SetClanTag("    niggerware    "); break; }
                case 15:{ Local.SetClanTag("   niggerware     "); break; }
                case 16:{ Local.SetClanTag("  niggerware      "); break; }
                case 17:{ Local.SetClanTag(" niggerware       "); break; }
                case 18:{ Local.SetClanTag("niggerware        "); break; }
                case 19:{ Local.SetClanTag("iggerware         "); break; }
                case 20:{ Local.SetClanTag("ggerware          "); break; }
                case 21:{ Local.SetClanTag("gerware           "); break; }
                case 22:{ Local.SetClanTag("erware            "); break; }
                case 23:{ Local.SetClanTag("rware             "); break; }
                case 24:{ Local.SetClanTag("ware              "); break; }
                case 25:{ Local.SetClanTag("are               "); break; }
                case 26:{ Local.SetClanTag("re                "); break; }
                case 27:{ Local.SetClanTag("e                 "); break; }
         


           
            }
       	   }
    if(tag == 3)
	{
		switch((time) % 27)
		{ 
		case 0: { Local.SetClanTag("                  "); break; }
                case 1: { Local.SetClanTag("                 o"); break; }
                case 2: { Local.SetClanTag("                on"); break; }
                case 3: { Local.SetClanTag("               one"); break; }
                case 4: { Local.SetClanTag("              onet"); break; }
                case 5: { Local.SetClanTag("             oneta"); break; }
                case 6: { Local.SetClanTag("            onetap"); break; }
                case 7: { Local.SetClanTag("           onetap."); break; }
                case 8: { Local.SetClanTag("          onetap.s"); break; }
                case 9: { Local.SetClanTag("         onetap.su"); break; }
                case 10:{ Local.SetClanTag("        onetap.su "); break; }
                case 11:{ Local.SetClanTag("       onetap.su  "); break; }
                case 12:{ Local.SetClanTag("      onetap.su   "); break; }
                case 13:{ Local.SetClanTag("     onetap.su    "); break; }
                case 14:{ Local.SetClanTag("    onetap.su     "); break; }
                case 15:{ Local.SetClanTag("   onetap.su      "); break; }
                case 16:{ Local.SetClanTag("  onetap.su       "); break; }
                case 17:{ Local.SetClanTag(" onetap.su        "); break; }
                case 18:{ Local.SetClanTag("onetap.su         "); break; }
                case 19:{ Local.SetClanTag("netap.su          "); break; }
                case 20:{ Local.SetClanTag("etap.su           "); break; }
                case 21:{ Local.SetClanTag("tap.su            "); break; }
                case 22:{ Local.SetClanTag("ap.su             "); break; }
                case 23:{ Local.SetClanTag("p.su              "); break; }
                case 24:{ Local.SetClanTag(".su               "); break; }
                case 25:{ Local.SetClanTag("su                "); break; }
                case 26:{ Local.SetClanTag("u                 "); break; }
		}
	}
	    if(tag == 4)
	{
		switch((time) % 27)
		{ 
		case 0: { Local.SetClanTag("                  "); break; }
                case 1: { Local.SetClanTag("                 F"); break; }
                case 2: { Local.SetClanTag("                Fl"); break; }
                case 3: { Local.SetClanTag("               Flo"); break; }
                case 4: { Local.SetClanTag("              Flow"); break; }
                case 5: { Local.SetClanTag("             FlowH"); break; }
                case 6: { Local.SetClanTag("            FlowHo"); break; }
                case 7: { Local.SetClanTag("           FlowHoo"); break; }
                case 8: { Local.SetClanTag("          FlowHook"); break; }
                case 9: { Local.SetClanTag("         FlowHooks"); break; }
                case 10:{ Local.SetClanTag("        FlowHooks "); break; }
                case 11:{ Local.SetClanTag("       FlowHooks  "); break; }
                case 12:{ Local.SetClanTag("      FlowHooks   "); break; }
                case 13:{ Local.SetClanTag("     FlowHooks    "); break; }
                case 14:{ Local.SetClanTag("    FlowHooks     "); break; }
                case 15:{ Local.SetClanTag("   FlowHooks      "); break; }
                case 16:{ Local.SetClanTag("  FlowHooks       "); break; }
                case 17:{ Local.SetClanTag(" FlowHooks        "); break; }
                case 18:{ Local.SetClanTag("FlowHooks         "); break; }
                case 19:{ Local.SetClanTag("lowHooks          "); break; }
                case 20:{ Local.SetClanTag("owHooks           "); break; }
                case 21:{ Local.SetClanTag("wHooks            "); break; }
                case 22:{ Local.SetClanTag("Hooks             "); break; }
                case 23:{ Local.SetClanTag("ooks              "); break; }
                case 24:{ Local.SetClanTag("oks               "); break; }
                case 25:{ Local.SetClanTag("ks                "); break; }
                case 26:{ Local.SetClanTag("s                 "); break; }
		}
	}
	if(tag == 5)
		   	{
		switch((time) % 28)
		{ 
		case 0: { Local.SetClanTag("                  "); break; }
                case 1: { Local.SetClanTag("                 A"); break; }
                case 2: { Local.SetClanTag("                AI"); break; }
                case 3: { Local.SetClanTag("               AIM"); break; }
                case 4: { Local.SetClanTag("              AIMJ"); break; }
                case 5: { Local.SetClanTag("             AIMJU"); break; }
                case 6: { Local.SetClanTag("            AIMJUN"); break; }
                case 7: { Local.SetClanTag("           AIMJUNK"); break; }
                case 8: { Local.SetClanTag("          AIMJUNKI"); break; }
                case 9: { Local.SetClanTag("         AIMJUNKIE"); break; }
                case 10:{ Local.SetClanTag("        AIMJUNKIES"); break; }
                case 11:{ Local.SetClanTag("       AIMJUNKIES "); break; }
                case 12:{ Local.SetClanTag("      AIMJUNKIES  "); break; }
                case 13:{ Local.SetClanTag("     AIMJUNKIES   "); break; }
                case 14:{ Local.SetClanTag("    AIMJUNKIES    "); break; }
                case 15:{ Local.SetClanTag("   AIMJUNKIES     "); break; }
                case 16:{ Local.SetClanTag("  AIMJUNKIES      "); break; }
                case 17:{ Local.SetClanTag(" AIMJUNKIES       "); break; }
                case 18:{ Local.SetClanTag("AIMJUNKIES        "); break; }
                case 19:{ Local.SetClanTag("IMJUNKIES         "); break; }
                case 20:{ Local.SetClanTag("MJUNKIES          "); break; }
                case 21:{ Local.SetClanTag("JUNKIES           "); break; }
                case 22:{ Local.SetClanTag("UNKIES            "); break; }
                case 23:{ Local.SetClanTag("NKIES             "); break; }
                case 24:{ Local.SetClanTag("KIES              "); break; }
                case 25:{ Local.SetClanTag("IES               "); break; }
                case 26:{ Local.SetClanTag("ES                "); break; }
				case 27:{ Local.SetClanTag("S                 "); break; }
		}
	}
		       if(tag == 6)
	{
		switch((time) % 26)
		{ 
		case 0: { Local.SetClanTag("                  "); break; }
                case 1: { Local.SetClanTag("                 s"); break; }
                case 2: { Local.SetClanTag("                sk"); break; }
                case 3: { Local.SetClanTag("               ske"); break; }
                case 4: { Local.SetClanTag("              skee"); break; }
                case 5: { Local.SetClanTag("             skeet"); break; }
                case 6: { Local.SetClanTag("            skeet."); break; }
                case 7: { Local.SetClanTag("           skeet.c"); break; }
                case 8: { Local.SetClanTag("          skeet.cc"); break; }
                case 9: { Local.SetClanTag("          skeet.cc"); break; }
                case 10:{ Local.SetClanTag("         skeet.cc "); break; }
                case 11:{ Local.SetClanTag("        skeet.cc  "); break; }
                case 12:{ Local.SetClanTag("       skeet.cc   "); break; }
                case 13:{ Local.SetClanTag("      skeet.cc    "); break; }
                case 14:{ Local.SetClanTag("     skeet.cc     "); break; }
				case 15:{ Local.SetClanTag("skeet.cc          "); break; }
				case 16:{ Local.SetClanTag("skeet.cc          "); break; }
                case 17:{ Local.SetClanTag("skeet.cc          "); break; }
                case 18:{ Local.SetClanTag("keet.cc           "); break; }
                case 19:{ Local.SetClanTag("eet.cc            "); break; }
                case 20:{ Local.SetClanTag("et.cc             "); break; }
                case 21:{ Local.SetClanTag("t.cc              "); break; }
                case 22:{ Local.SetClanTag(".cc               "); break; }
                case 23:{ Local.SetClanTag("cc                "); break; }
                case 24:{ Local.SetClanTag("c                 "); break; }
                case 25:{ Local.SetClanTag("                  "); break; }
		}
	}
		   	if(tag == 7)
	{
		switch((time) % 23)
		{ 
		case 0: { Local.SetClanTag("                  "); break; }
                case 1: { Local.SetClanTag("                 8"); break; }
                case 2: { Local.SetClanTag("                8="); break; }
                case 3: { Local.SetClanTag("               8=="); break; }
                case 4: { Local.SetClanTag("              8==="); break; }
                case 5: { Local.SetClanTag("             8===="); break; }
                case 6: { Local.SetClanTag("            8====D"); break; }
				case 7: { Local.SetClanTag("           8====D "); break; }
				case 8: { Local.SetClanTag("          8====D  "); break; }
				case 9: { Local.SetClanTag("         8====D   "); break; }
			    case 10:{ Local.SetClanTag("        8====D    "); break; }
                case 11:{ Local.SetClanTag("       8====D     "); break; }
                case 12:{ Local.SetClanTag("      8====D      "); break; }
                case 13:{ Local.SetClanTag("     8====D       "); break; } 
                case 14:{ Local.SetClanTag("    8====D        "); break; }
                case 15:{ Local.SetClanTag("   8====D         "); break; }
				case 16:{ Local.SetClanTag("8====D            "); break; }
				case 17:{ Local.SetClanTag("====D             "); break; }
                case 18:{ Local.SetClanTag("===D              "); break; }
                case 19:{ Local.SetClanTag("==D               "); break; }
                case 20:{ Local.SetClanTag("=D                "); break; }
                case 21:{ Local.SetClanTag("D                 "); break; }
                case 22:{ Local.SetClanTag("                  "); break; }
		}
	}
	    if(tag == 8)
            {
            switch((time) % 31)
            {
                case 0: { Local.SetClanTag("                  f"); break; }
                case 1: { Local.SetClanTag("                 fa"); break; }
                case 2: { Local.SetClanTag("                fat"); break; }
                case 3: { Local.SetClanTag("               fata"); break; }
                case 4: { Local.SetClanTag("              fatal"); break; }
                case 5: { Local.SetClanTag("             fatali"); break; }
                case 6: { Local.SetClanTag("            fatalit"); break; }
                case 7: { Local.SetClanTag("           fatality"); break; }
                case 8: { Local.SetClanTag("          fatality."); break; }
                case 9: { Local.SetClanTag("         fatality.w"); break; }
                case 10:{ Local.SetClanTag("        fatality.wi"); break; }
                case 11:{ Local.SetClanTag("       fatality.win"); break; }
                case 12:{ Local.SetClanTag("      fatality.win "); break; }
                case 13:{ Local.SetClanTag("     fatality.win  "); break; }
                case 14:{ Local.SetClanTag("    fatality.win   "); break; }
                case 15:{ Local.SetClanTag("   fatality.win    "); break; }
                case 16:{ Local.SetClanTag("  fatality.win     "); break; }
                case 17:{ Local.SetClanTag(" fatality.win      "); break; }
                case 18:{ Local.SetClanTag("fatality.win       "); break; }
                case 19:{ Local.SetClanTag("atality.win        "); break; }
                case 20:{ Local.SetClanTag("tality.win         "); break; }
                case 21:{ Local.SetClanTag("ality.win          "); break; }
                case 22:{ Local.SetClanTag("lity.win           "); break; }
                case 23:{ Local.SetClanTag("ity.win            "); break; }
                case 24:{ Local.SetClanTag("ty.win             "); break; }
                case 25:{ Local.SetClanTag("y.win              "); break; }
                case 26:{ Local.SetClanTag(".win               "); break; }
                case 27:{ Local.SetClanTag("win                "); break; }
				case 28:{ Local.SetClanTag("in                 "); break; }
                case 29:{ Local.SetClanTag("n                  "); break; }
                case 30:{ Local.SetClanTag("                   "); break; }

           
            }
       	   }
		   }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");
