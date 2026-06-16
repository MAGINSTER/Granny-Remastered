function sprinting(c){
    var s = c.getSubject()
    if (s.isSprinting()){
        s.getStates().add("sprint", 1)        
        if (s.getStates().getNumber("sprint") >= 100){
            s.getStates().setNumber("sprint", 0)           
            var pos = s.getPosition()
            var msr = c.getServer().getEntities("@e[mpid=msr]")            
            for each (var ms in msr){
                if (ms.isEntityInRadius(s, 10) && c.getServer().getStates().getNumber("go") === 0){
                    msr[0].setPatrol(pos.x, pos.y-1, pos.z, "", "", 0)}}}}}