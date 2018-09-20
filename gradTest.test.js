function createMenuData(data) {
	let out=[];
		data.forEach(text=>{
			var res = text.split("/");	
    	if(res.length==2){
      	var found = out.find(element =>{
          return element.title==res[0];
        });
        if(found){
        	found.data.push(res[1]);
        }
        else{
        	out.push({
          	title:res[0],
            data:[res[1]]
          });
        }
      }
    })
    return out;
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });