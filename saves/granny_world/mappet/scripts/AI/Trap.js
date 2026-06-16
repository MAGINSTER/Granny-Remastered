function main(c){
    var s = c.getSubject();
    var player = c.server.getEntities("@a[m=!3]")
    var pos = s.position
    var open = mappet.createMorph("{Materials:{m_7c1288e7-d625-3025-fc5d-28f01c023d0a:\"b.a:capcain/open/texture.png\"},Settings:{Hands:1b},Name:\"blockbuster.capcain/open\"}")
    for each (var pl in player){
        if (pl.isEntityInRadius(s, 0.5)){
            if (s.getStates().getNumber("actived") === 0){
                s.setMorph(mappet.createMorph("{Materials:{m_7c1288e7-d625-3025-fc5d-28f01c023d0a:\"b.a:capcain/close/texture.png\"},Settings:{Hands:1b},Name:\"blockbuster.capcain/close\"}"))
                s.getStates().setNumber("actived", 1)
                pl.getStates().setNumber("trap_exit", 0)
                pl.setupHUD("trap")  
                c.executeCommand("playsound mp.sounds:granny.gameplay.trapclosed master @a ~ ~ ~ 0.5 1")
                if (c.getServer().getStates().getNumber("go") === 0){
                    var granny = c.getServer().getEntities("@e[mpid=msr]")
                    c.getServer().getStates().setNumber("go", 1)
                    granny[0].setPatrol(pos.x, pos.y-0.5, pos.z, "", "", 0)}}
            if (pl.getStates().getNumber("trap_exit") > 0){pl.executeCommand("tp @s "+pos.x+" "+pos.y+" "+pos.z+" 0 90")}
            pl.applyPotion(mappet.getPotion("jump_boost"), 99999, 150, false)
            pl.executeCommand("tp @s "+pos.x+" "+pos.y+" "+pos.z)}}}
function trap_int(c){
    var s = c.getSubject();
    var player = c.getServer().getAllPlayers();
    if (s.getStates().getNumber("actived") === 1){
        for each (var pl in player){
            if (pl.isEntityInRadius(s, 0.5)){
                if (pl.getStates().getNumber("trap_exit") < 1){
                    pl.setupHUD("trap_exit")
                    pl.executeCommand("mp hud setup @s trap_ext")
                    pl.getStates().setNumber("trap", 1)
                    pl.executeCommand("/mp script exec @s AI/Trap.js swing")}}}}}
function swing(c){
    if (c.subject.getStates().getNumber("trap") === 1){
        if (c.subject.getStates().getNumber("trap_exit") < 7){
            c.subject.swingArm()
            c.subject.getStates().add("trap_exit", 1)
            c.executeCommand("playsound minecraft:entity.armorstand.place master @s ~ ~ ~ 1 1")
            if (c.subject.getStates().getNumber("trap_exit") === 1){c.subject.changeHUDMorph("trap_exit", 0, mappet.createMorph("{Background:1845493760,Label:\"[8{[6-[7-----[8}\",Name:\"label\"}"))}
            else if (c.subject.getStates().getNumber("trap_exit") === 2){c.subject.changeHUDMorph("trap_exit", 0, mappet.createMorph("{Background:1845493760,Label:\"[8{[6--[7----[8}\",Name:\"label\"}"))}
            else if (c.subject.getStates().getNumber("trap_exit") === 3){c.subject.changeHUDMorph("trap_exit", 0, mappet.createMorph("{Background:1845493760,Label:\"[8{[6---[7---[8}\",Name:\"label\"}"))}
            else if (c.subject.getStates().getNumber("trap_exit") === 4){c.subject.changeHUDMorph("trap_exit", 0, mappet.createMorph("{Background:1845493760,Label:\"[8{[6----[7--[8}\",Name:\"label\"}"))}
            else if (c.subject.getStates().getNumber("trap_exit") === 5){c.subject.changeHUDMorph("trap_exit", 0, mappet.createMorph("{Background:1845493760,Label:\"[8{[6-----[7-[8}\",Name:\"label\"}"))}
            else if (c.subject.getStates().getNumber("trap_exit") === 6){
                c.subject.changeHUDMorph("trap_exit", 0, mappet.createMorph("{Background:1845493760,Label:\"[8{[6------[8}\",Name:\"label\"}"))}}
        if (c.subject.getStates().getNumber("trap_exit") === 7){
            var player = c.getServer().getEntities("@e[mpid=trap]")
            for each (var pl in player){
                if (pl.isEntityInRadius(c.subject, 0.5)){pl.remove()}}  
            c.server.getStates().add("trap", -1)
            c.subject.closeHUD("trap_exit")
            c.subject.getStates().setNumber("trap", 0)
            c.subject.clearPotions() 
            c.subject.applyPotion(mappet.getPotion("slowness"), 99999, 2, false)
            c.executeCommand("playsound mp.sounds:granny.gameplay.trapopen master @a ~ ~ ~ 0.5 1")}
        c.scheduleScript("swing", 20)}}