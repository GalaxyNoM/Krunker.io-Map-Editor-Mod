// @version 0.2
let prefabs = {
    'Signatures': {
        'Justprob': [{"p":[0,0,0],"s":[45,3,45],"c":9316906},{"p":[0,3,0],"s":[32,3,32],"c":16758454},{"p":[18,3,18],"s":[4,20,4],"c":9796732},{"p":[0,6,0],"s":[28,17,24],"c":10631738},{"p":[0,23,0],"s":[45,3,45],"c":11291981},{"p":[-18,3,18],"s":[4,20,4],"c":9796732},{"p":[-18,3,-18],"s":[4,20,4],"c":9796732},{"p":[18,3,-18],"s":[4,20,4],"c":9796732},{"p":[0,15,12],"s":[12,3,1]},{"p":[0,38,0],"s":[19,15,22],"c":15066597,"t":5},{"p":[0,48,15],"s":[9,12,8],"t":5},{"p":[11,44,0],"s":[3,9,15],"t":5},{"p":[-11,44,0],"s":[3,9,15],"t":5},{"p":[0,52,22],"s":[9,3,6],"c":11771674,"t":5},{"p":[0,49,21],"s":[4,3,4],"c":12927811,"t":5},{"p":[0,44,-13],"s":[15,9,4],"t":5},{"p":[-2,56,20],"s":[1,1,2],"c":0,"t":5},{"p":[2,56,20],"s":[1,1,2],"c":0,"t":5},{"p":[5,26,-2],"s":[1,12,1],"c":13407801,"t":5},{"p":[5,26,0],"s":[3,1,5],"c":11109425,"t":5},{"p":[-5,26,0],"s":[3,1,5],"c":11109425,"t":5},{"p":[-5,26,-2],"s":[1,12,1],"c":13407801,"t":5}],
    },
    'Furniture': {
        'Chair': [{"p":[0,4,0],"s":[8,2,8],"c":8021557,"t":5},{"p":[3,0,-3],"s":[1,4,1],"c":5259807,"t":5},{"p":[3,0,3],"s":[1,4,1],"c":5259807,"t":5},{"p":[-3,0,3],"s":[1,4,1],"c":5259807,"t":5},{"p":[-3,0,-3],"s":[1,4,1],"c":5259807,"t":5},{"p":[-4,6,-3],"s":[1,7,1],"c":5259807,"t":5},{"p":[-4,6,3],"s":[1,7,1],"c":5259807,"t":5},{"p":[-4,12,0],"s":[1,1,5],"c":5259807,"t":5},{"p":[-4,6,0],"s":[1,6,1],"c":5259807,"t":5},{"p":[-4,9,1],"s":[1,1,1],"c":5259807,"t":5},{"p":[-4,9,2],"s":[1,1,1],"c":5259807,"t":5},{"p":[-4,9,-2],"s":[1,1,1],"c":5259807,"t":5},{"p":[-4,9,-1],"s":[1,1,1],"c":5259807,"t":5}],
        'Stool': [{"p":[0,4,0],"s":[8,2,8],"c":8021557,"t":5},{"p":[3,0,-3],"s":[1,4,1],"c":5259807,"t":5},{"p":[0,-2,0],"s":[46,2,32],"c":8021557,"t":5},{"p":[3,0,3],"s":[1,4,1],"c":5259807,"t":5},{"p":[-3,0,3],"s":[1,4,1],"c":5259807,"t":5},{"p":[-3,0,-3],"s":[1,4,1],"c":5259807,"t":5}],
        'Table': [{"p":[0,7,0],"s":[20,2,10],"c":8021557,"t":5},{"p":[9,0,-4],"s":[1,7,1],"c":5259807,"t":5},{"p":[9,0,4],"s":[1,7,1],"c":5259807,"t":5},{"p":[-9,0,4],"s":[1,7,1],"c":5259807,"t":5},{"p":[-9,0,-4],"s":[1,7,1],"c":5259807,"t":5}],
    },
    'Vehicles': {
        'Tank': [{"p":[43,0,9],"s":[22,4,12],"c":7500402,"t":5},{"p":[43,0,-6],"s":[22,4,12],"c":7500402,"t":5},{"p":[43,0,-21],"s":[22,4,12],"c":7500402,"t":5},{"p":[43,0,-36],"s":[22,4,12],"c":7500402,"t":5},{"p":[43,5,-50],"s":[22,4,12],"r":[0.7,0,0],"c":7500402,"t":5},{"p":[43,13,-56],"s":[22,12,4],"c":7500402,"t":5},{"p":[43,28,-54],"s":[22,12,4],"r":[0.87,0,0],"c":7500402,"t":5},{"p":[44,29,9],"s":[24,10,112],"c":4737096,"t":5},{"p":[43,0,24],"s":[22,4,12],"c":7500402,"t":5},{"p":[43,0,39],"s":[22,4,12],"c":7500402,"t":5},{"p":[43,0,54],"s":[22,4,12],"c":7500402,"t":5},{"p":[43,5,68],"s":[22,4,12],"r":[-0.7,0,0],"c":7500402,"t":5},{"p":[43,13,74],"s":[22,12,4],"c":7500402,"t":5},{"p":[43,27,72],"s":[22,12,4],"r":[-0.87,0,0],"c":7500402,"t":5},{"p":[44,38,-19],"s":[24,10,52],"r":[-0.35,0,0],"c":4737096,"t":5},{"p":[44,40,47],"s":[24,10,26],"r":[0.7,0,0],"c":4737096,"t":5},{"p":[44,46,23],"s":[24,10,42],"c":4737096,"t":5},{"p":[44,39,16],"s":[24,8,64],"c":4737096,"t":5},{"p":[0,54,23],"s":[64,2,42],"c":4737096,"t":5},{"p":[0,44,-10],"s":[64,2,24],"c":4737096,"t":5},{"p":[0,44,3],"s":[64,10,2],"c":4737096,"t":5},{"p":[22,36,-30],"s":[20,2,24],"r":[-0.7,0,0],"c":4737096,"t":5},{"p":[0,16,9],"s":[64,2,96],"c":4737096,"t":5},{"p":[0,16,-40],"s":[64,14,2],"c":4737096,"t":5},{"p":[0,45,3],"s":[64,2,4],"r":[-0.7,0,0],"c":4737096,"t":5},{"p":[0,16,57],"s":[64,14,2],"r":[0.52,0,0],"c":4737096,"t":5},{"p":[0,27,63],"s":[64,20,4],"c":4737096,"t":5},{"p":[19,50,53],"s":[26,2,24],"r":[0.35,0,0],"c":4737096,"t":5},{"p":[0,16,-45],"s":[64,14,8],"c":4737096,"t":5},{"p":[0,27,-51],"s":[64,2,8],"r":[-0.35,0,0],"c":4737096,"t":5},{"p":[0,17,-55],"s":[64,10,2],"c":4737096,"t":5},{"p":[0,17,-52],"s":[64,2,6],"c":4737096,"t":5},{"p":[31,44,51],"s":[2,8,24],"r":[0.35,0,0],"c":4737096,"t":5},{"p":[31,18,53],"s":[2,14,8],"r":[0.52,0,0],"c":4737096,"t":5},{"p":[31,18,9],"s":[2,12,96],"c":4737096,"t":5},{"p":[0,25,-50],"s":[64,2,8],"r":[-0.35,0,0],"c":4737096,"t":5},{"p":[0,19,-52],"s":[64,8,6],"c":4737096,"t":5},{"p":[30,37,-31],"s":[4,2,24],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[30,29,-44],"s":[4,10,10],"c":3750201,"t":5},{"p":[30,27,-52],"s":[4,2,10],"r":[-0.35,0,0],"c":3947580,"t":5},{"p":[30,15,-56],"s":[4,12,2],"c":2960685,"t":5},{"p":[30,45,-10],"s":[4,2,26],"c":3421236,"t":5},{"p":[30,44,2],"s":[4,12,2],"c":2763306,"t":5},{"p":[30,55,23],"s":[4,2,42],"c":2960685,"t":5},{"p":[30,51,55],"s":[4,2,24],"r":[0.35,0,0],"c":2434341,"t":5},{"p":[30,27,65],"s":[4,22,4],"c":2631720,"t":5},{"p":[30,15,58],"s":[4,14,2],"r":[0.52,0,0],"c":3092271,"t":5},{"p":[0,16,-52],"s":[64,2,8],"c":4737096,"t":5},{"p":[30,14,1],"s":[4,2,116],"c":3223857,"t":5},{"p":[43,29,-47],"s":[24,8,2],"c":15615,"t":5},{"p":[43,29,65],"s":[24,8,2],"c":15615,"t":5},{"p":[11,37,-31],"s":[4,2,24],"r":[-0.7,0,0],"c":15615,"t":5},{"p":[-4,37,-31],"s":[4,2,24],"r":[-0.7,0,0],"c":15615,"t":5},{"p":[4,30,-39],"s":[12,2,4],"r":[-0.7,0,0],"c":15615,"t":5},{"p":[4,43,-24],"s":[12,2,4],"r":[-0.7,0,0],"c":15615,"t":5},{"p":[-18,36,-30],"s":[28,2,24],"r":[-0.7,0,0],"c":4737096,"t":5},{"p":[-11,42,-25],"s":[2,2,4],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[-14,42,-25],"s":[2,2,4],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[-17,42,-25],"s":[2,2,4],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[-20,42,-25],"s":[2,2,4],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[-20,39,-29],"s":[2,2,4],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[-17,39,-29],"s":[2,2,4],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[-14,39,-29],"s":[2,2,4],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[-11,39,-29],"s":[2,2,4],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[10,55,23],"s":[22,2,26],"c":7237230,"t":5},{"p":[10,57,23],"s":[16,2,20],"c":7237230,"t":5},{"p":[10,59,23],"s":[6,2,14],"c":4737096,"t":5},{"p":[10,61,23],"s":[24,10,46],"c":2631720,"t":5},{"p":[-2,61,23],"s":[8,10,46],"r":[0,0.17,0],"c":2631720,"t":5},{"p":[22,61,23],"s":[8,10,46],"r":[0,-0.17,0],"c":2631720,"t":5},{"p":[-3,63,19],"s":[4,6,42],"r":[0,0.17,0],"c":15615,"t":5},{"p":[23,63,19],"s":[4,6,42],"r":[0,-0.17,0],"c":15615,"t":5},{"p":[10,62,1],"s":[22,8,6],"c":4408131,"t":5},{"p":[10,64,-37],"s":[16,4,76],"c":5395026,"t":5},{"p":[10,65,-38],"s":[14,2,76],"c":11775,"t":5},{"p":[10,65,-7],"s":[12,4,10],"c":3092271,"t":5},{"p":[10,66,-17],"s":[12,4,10],"c":3092271,"t":5},{"p":[10,65,-27],"s":[12,4,10],"c":3092271,"t":5},{"p":[10,66,-37],"s":[12,4,10],"c":3092271,"t":5},{"p":[10,65,-47],"s":[12,4,10],"c":3092271,"t":5},{"p":[10,66,-57],"s":[12,4,10],"c":3092271,"t":5},{"p":[10,65,-67],"s":[12,4,10],"c":3092271,"t":5},{"p":[10,66,-73],"s":[12,4,2],"c":3092271,"t":5},{"p":[16,65,23],"s":[12,10,38],"r":[0,-0.17,0],"c":2631720,"t":5},{"p":[4,65,23],"s":[12,10,38],"r":[0,0.17,0],"c":2631720,"t":5},{"p":[10,65,19],"s":[8,10,32],"c":2631720,"t":5},{"p":[10,72,4],"s":[4,2,6],"c":11775,"t":5},{"p":[-17,55,23],"s":[12,2,18],"c":7237230,"t":5},{"p":[-17,56,23],"s":[6,2,8],"c":7237230,"t":5},{"p":[-17,58,23],"s":[10,2,18],"c":5395026,"t":5},{"p":[-17,60,23],"s":[12,4,22],"c":2763306,"t":5},{"p":[-17,62,23],"s":[12,4,22],"r":[0.17,0,0],"c":2763306,"t":5},{"p":[-17,61,16],"s":[8,4,12],"r":[0.17,0,0],"c":7697781,"t":5},{"p":[-17,62,15],"s":[6,2,12],"r":[0.17,0,0],"c":19199,"t":5},{"p":[-17,65,23],"s":[4,2,12],"c":7237230,"t":5},{"p":[0,27,32],"s":[64,2,60],"c":4737096,"t":5},{"p":[-10,27,3],"s":[44,20,2],"c":4737096,"t":5},{"p":[29,27,3],"s":[6,20,2],"c":4737096,"t":5},{"p":[26,28,3],"s":[2,18,4],"c":15615,"t":5},{"p":[12,28,3],"s":[2,18,4],"c":15615,"t":5},{"p":[19,42,3],"s":[12,4,4],"c":15615,"t":5},{"p":[19,28,3],"s":[12,2,4],"c":15615,"t":5},{"p":[10,71,35],"s":[18,4,16],"c":2631720,"t":5},{"p":[0,47,62],"s":[12,2,6],"r":[0.35,0,0],"c":4737096,"t":5},{"p":[-19,50,53],"s":[26,2,24],"r":[0.35,0,0],"c":4737096,"t":5},{"p":[0,53,46],"s":[12,2,6],"r":[0.35,0,0],"c":4737096,"t":5},{"p":[-6,49,53],"s":[2,4,14],"r":[0.35,0,0],"c":15615,"t":5},{"p":[5,49,53],"s":[2,4,14],"r":[0.35,0,0],"c":15615,"t":5},{"p":[0,47,59],"s":[10,4,2],"r":[0.35,0,0],"c":15615,"t":5},{"p":[0,51,49],"s":[10,4,4],"r":[0.35,0,0],"c":15615,"t":5},{"p":[0,45,-3],"s":[30,2,2],"c":3750201,"t":5},{"p":[0,45,-7],"s":[30,2,2],"c":3750201,"t":5},{"p":[0,45,-11],"s":[30,2,2],"c":3750201,"t":5},{"p":[0,45,-15],"s":[30,2,2],"c":3750201,"t":5},{"p":[0,45,-19],"s":[30,2,2],"c":3750201,"t":5},{"p":[-30,29,-44],"s":[4,10,10],"c":3750201,"t":5},{"p":[-30,27,-52],"s":[4,2,10],"r":[-0.35,0,0],"c":3947580,"t":5},{"p":[-30,15,-56],"s":[4,12,2],"c":2960685,"t":5},{"p":[-30,14,1],"s":[4,2,116],"c":3223857,"t":5},{"p":[-30,37,-31],"s":[4,2,24],"r":[-0.7,0,0],"c":2960685,"t":5},{"p":[-30,45,-10],"s":[4,2,26],"c":3421236,"t":5},{"p":[-30,44,2],"s":[4,12,2],"c":2763306,"t":5},{"p":[-30,55,23],"s":[4,2,42],"c":2960685,"t":5},{"p":[-30,51,55],"s":[4,2,24],"r":[0.35,0,0],"c":2434341,"t":5},{"p":[-30,27,65],"s":[4,22,4],"c":2631720,"t":5},{"p":[-30,15,58],"s":[4,14,2],"r":[0.52,0,0],"c":3092271,"t":5},{"p":[-31,18,9],"s":[2,12,96],"c":4737096,"t":5},{"p":[-44,29,9],"s":[24,10,112],"c":4737096,"t":5},{"p":[-44,39,16],"s":[24,8,64],"c":4737096,"t":5},{"p":[-44,40,47],"s":[24,10,26],"r":[0.7,0,0],"c":4737096,"t":5},{"p":[-44,46,23],"s":[24,10,42],"c":4737096,"t":5},{"p":[-44,38,-19],"s":[24,10,52],"r":[-0.35,0,0],"c":4737096,"t":5},{"p":[-31,44,51],"s":[2,8,24],"r":[0.35,0,0],"c":4737096,"t":5},{"p":[-31,18,53],"s":[2,14,8],"r":[0.52,0,0],"c":4737096,"t":5},{"p":[-43,29,-47],"s":[24,8,2],"c":15615,"t":5},{"p":[-43,29,65],"s":[24,8,2],"c":15615,"t":5},{"p":[-43,13,-56],"s":[22,12,4],"c":7500402,"t":5},{"p":[-43,13,74],"s":[22,12,4],"c":7500402,"t":5},{"p":[-43,27,72],"s":[22,12,4],"r":[-0.87,0,0],"c":7500402,"t":5},{"p":[-43,5,68],"s":[22,4,12],"r":[-0.7,0,0],"c":7500402,"t":5},{"p":[-43,28,-54],"s":[22,12,4],"r":[0.87,0,0],"c":7500402,"t":5},{"p":[-43,5,-50],"s":[22,4,12],"r":[0.7,0,0],"c":7500402,"t":5},{"p":[-43,0,-36],"s":[22,4,12],"c":7500402,"t":5},{"p":[-43,0,39],"s":[22,4,12],"c":7500402,"t":5},{"p":[-43,0,24],"s":[22,4,12],"c":7500402,"t":5},{"p":[-43,0,9],"s":[22,4,12],"c":7500402,"t":5},{"p":[-43,0,-6],"s":[22,4,12],"c":7500402,"t":5},{"p":[-43,0,-21],"s":[22,4,12],"c":7500402,"t":5},{"p":[-43,0,54],"s":[22,4,12],"c":7500402,"t":5},{"p":[-43,14,66],"s":[22,10,12],"c":2236962,"t":5},{"p":[-43,14,-48],"s":[22,10,12],"c":2236962,"t":5},{"p":[-43,5,-26],"s":[22,10,12],"c":2236962,"t":5},{"p":[-43,5,44],"s":[22,10,12],"c":2236962,"t":5},{"p":[-43,12,-36],"s":[6,4,16],"r":[0.52,0,0],"c":7500402,"t":5},{"p":[-43,22,-30],"s":[6,4,16],"r":[-1.05,0,0],"c":7500402,"t":5},{"p":[-43,12,55],"s":[6,4,16],"r":[-0.53,0,0],"c":7500402,"t":5},{"p":[-43,22,49],"s":[6,4,16],"r":[1.04,0,0],"c":7500402,"t":5},{"p":[43,5,44],"s":[22,10,12],"c":2236962,"t":5},{"p":[43,5,-26],"s":[22,10,12],"c":2236962,"t":5},{"p":[43,14,-48],"s":[22,10,12],"c":2236962,"t":5},{"p":[43,14,66],"s":[22,10,12],"c":2236962,"t":5},{"p":[43,12,55],"s":[6,4,16],"r":[-0.53,0,0],"c":7500402,"t":5},{"p":[43,13,-37],"s":[6,4,16],"r":[0.52,0,0],"c":7500402,"t":5},{"p":[43,22,49],"s":[6,4,16],"r":[1.04,0,0],"c":7500402,"t":5},{"p":[43,22,-30],"s":[6,4,16],"r":[-1.05,0,0],"c":7500402,"t":5},{"p":[0,17,6],"s":[64,10,8],"c":4737096,"t":5}],
        'Plane': [{"p":[2,22,18],"s":[58,10,196],"c":13562879,"t":6},{"p":[-29,22,93],"s":[4,16,70],"c":13562879,"t":6},{"p":[33,22,-10],"s":[4,16,176],"c":13562879,"t":6},{"p":[-29,46,93],"s":[4,8,70],"c":14277081,"t":5},{"p":[33,46,-2],"s":[4,8,261],"c":14277081,"t":5},{"p":[2,23,148],"s":[54,20,13],"c":14277081,"t":5},{"p":[2,23,161],"s":[48,17,13],"c":14277081,"t":5},{"p":[-29,22,-36],"s":[4,16,124],"c":13562879,"t":6},{"p":[-29,46,-53],"s":[4,8,158],"c":14277081,"t":5},{"p":[-56,1,42],"s":[56,31,28],"id":9,"v":1,"c":16738304,"t":6,"d":0},{"p":[-86,30,-14],"s":[110,8,16],"c":14277081,"t":5},{"p":[-103,30,-25],"s":[68,8,6],"c":14277081,"t":5},{"p":[-65,30,-3],"s":[68,8,6],"c":14277081,"t":5},{"p":[-55,30,3],"s":[48,8,6],"c":14277081,"t":5},{"p":[-46,30,9],"s":[30,8,6],"c":14277081,"t":5},{"p":[26,34,13],"s":[6,2,6],"c":2327458,"t":6},{"p":[30,34,12],"s":[2,4,8],"c":4346455,"t":6},{"p":[22,33,12],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[18,34,13],"s":[6,2,6],"c":2327458,"t":6},{"p":[14,34,12],"s":[2,4,8],"c":4346455,"t":6},{"p":[20,32,10],"s":[2,2,4],"c":4346455,"t":6},{"p":[16,32,10],"s":[2,2,4],"c":4346455,"t":6},{"p":[24,32,10],"s":[2,2,4],"c":4346455,"t":6},{"p":[28,32,10],"s":[2,2,4],"c":4346455,"t":6},{"p":[26,34,9],"s":[6,8,2],"c":2327458,"t":6},{"p":[18,34,9],"s":[6,8,2],"c":2327458,"t":6},{"p":[-26,34,70],"s":[2,4,8],"c":4346455,"t":6},{"p":[-22,34,67],"s":[6,8,2],"c":2327458,"t":6},{"p":[-22,34,71],"s":[6,2,6],"c":2327458,"t":6},{"p":[-18,33,70],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[-24,32,68],"s":[2,2,4],"c":4346455,"t":6},{"p":[-20,32,68],"s":[2,2,4],"c":4346455,"t":6},{"p":[-14,34,71],"s":[6,2,6],"c":2327458,"t":6},{"p":[-16,32,68],"s":[2,2,4],"c":4346455,"t":6},{"p":[-12,32,68],"s":[2,2,4],"c":4346455,"t":6},{"p":[-10,34,70],"s":[2,4,8],"c":4346455,"t":6},{"p":[-14,34,67],"s":[6,8,2],"c":2327458,"t":6},{"p":[59,30,3],"s":[48,8,6],"c":14277081,"t":5},{"p":[50,30,9],"s":[30,8,6],"c":14277081,"t":5},{"p":[69,30,-3],"s":[68,8,6],"c":14277081,"t":5},{"p":[90,30,-14],"s":[110,8,16],"c":14277081,"t":5},{"p":[107,30,-25],"s":[68,8,6],"c":14277081,"t":5},{"p":[-23,54,1],"s":[8,4,282],"c":14277081,"t":5},{"p":[2,4,121],"s":[6,16,6],"c":7107186,"t":5},{"p":[-3,2,121],"s":[4,10,10],"c":1513496,"t":5},{"p":[7,2,121],"s":[4,10,10],"c":1513496,"t":5},{"p":[14,8,-60],"s":[6,12,6],"c":7107186,"t":5},{"p":[14,4,-60],"s":[6,4,19],"c":7107186,"t":5},{"p":[-9,4,-60],"s":[6,4,19],"c":7107186,"t":5},{"p":[-9,8,-60],"s":[6,12,6],"c":7107186,"t":5},{"p":[19,2,-51],"s":[4,10,10],"c":1513496,"t":5},{"p":[19,2,-70],"s":[4,10,10],"c":1513496,"t":5},{"p":[-76,26,-9],"s":[4,4,6],"c":14277081,"t":5},{"p":[-76,22,-6],"s":[10,4,26],"c":14277081,"t":5},{"p":[-83,12,-6],"s":[4,10,26],"c":14277081,"t":5},{"p":[-69,12,-6],"s":[4,10,26],"c":14277081,"t":5},{"p":[-76,8,-6],"s":[10,4,26],"c":14277081,"t":5},{"p":[-83,12,8],"s":[4,10,2],"c":8659490,"t":5},{"p":[-69,12,8],"s":[4,10,2],"c":8659490,"t":5},{"p":[-76,22,8],"s":[10,4,2],"c":8659490,"t":5},{"p":[-76,8,8],"s":[10,4,2],"c":8659490,"t":5},{"p":[-76,12,-6],"s":[10,10,22],"col":1,"c":9342349,"t":5},{"p":[-29,38,6],"s":[4,6,12],"c":1780575,"t":1},{"p":[-29,44,22],"s":[4,2,8],"c":14277081,"t":5},{"p":[-29,44,6],"s":[4,2,12],"c":14277081,"t":5},{"p":[-18,33,-6],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[-22,34,-5],"s":[6,2,6],"c":2327458,"t":6},{"p":[-26,34,-6],"s":[2,4,8],"c":4346455,"t":6},{"p":[-24,32,-8],"s":[2,2,4],"c":4346455,"t":6},{"p":[-20,32,-8],"s":[2,2,4],"c":4346455,"t":6},{"p":[-16,32,-8],"s":[2,2,4],"c":4346455,"t":6},{"p":[-12,32,-8],"s":[2,2,4],"c":4346455,"t":6},{"p":[-22,34,-9],"s":[6,8,2],"c":2327458,"t":6},{"p":[-14,34,-5],"s":[6,2,6],"c":2327458,"t":6},{"p":[-14,34,-9],"s":[6,8,2],"c":2327458,"t":6},{"p":[-10,34,-6],"s":[2,4,8],"c":4346455,"t":6},{"p":[-29,38,-12],"s":[4,6,12],"c":1780575,"t":1},{"p":[-29,44,-12],"s":[4,2,12],"c":14277081,"t":5},{"p":[-26,34,-24],"s":[2,4,8],"c":4346455,"t":6},{"p":[-24,32,-26],"s":[2,2,4],"c":4346455,"t":6},{"p":[-20,32,-26],"s":[2,2,4],"c":4346455,"t":6},{"p":[-16,32,-26],"s":[2,2,4],"c":4346455,"t":6},{"p":[-12,32,-26],"s":[2,2,4],"c":4346455,"t":6},{"p":[-10,34,-24],"s":[2,4,8],"c":4346455,"t":6},{"p":[-18,33,-24],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[-22,34,-27],"s":[6,8,2],"c":2327458,"t":6},{"p":[-14,34,-27],"s":[6,8,2],"c":2327458,"t":6},{"p":[-22,34,-23],"s":[6,2,6],"c":2327458,"t":6},{"p":[-14,34,-23],"s":[6,2,6],"c":2327458,"t":6},{"p":[-29,38,-30],"s":[4,6,12],"c":1780575,"t":1},{"p":[-29,44,-30],"s":[4,2,12],"c":14277081,"t":5},{"p":[-29,38,-48],"s":[4,6,12],"c":1780575,"t":1},{"p":[-29,44,-48],"s":[4,2,12],"c":14277081,"t":5},{"p":[-29,38,22],"s":[4,6,8],"c":1780575,"t":1},{"p":[-29,38,64],"s":[4,6,12],"c":1780575,"t":1},{"p":[-29,44,64],"s":[4,2,12],"c":14277081,"t":5},{"p":[-29,38,82],"s":[4,6,12],"c":1780575,"t":1},{"p":[-29,44,82],"s":[4,2,12],"c":14277081,"t":5},{"p":[-29,38,111],"s":[4,6,34],"c":1780575,"t":1},{"p":[-29,44,111],"s":[4,2,34],"c":14277081,"t":5},{"p":[2,20,31],"s":[50,2,222],"c":13562879,"t":6},{"p":[80,26,-9],"s":[4,4,6],"c":14277081,"t":5},{"p":[80,22,-6],"s":[10,4,26],"c":14277081,"t":5},{"p":[87,12,-6],"s":[4,10,26],"c":14277081,"t":5},{"p":[73,12,-6],"s":[4,10,26],"c":14277081,"t":5},{"p":[80,8,-6],"s":[10,4,26],"c":14277081,"t":5},{"p":[87,12,8],"s":[4,10,2],"c":8659490,"t":5},{"p":[80,22,8],"s":[10,4,2],"c":8659490,"t":5},{"p":[73,12,8],"s":[4,10,2],"c":8659490,"t":5},{"p":[80,8,8],"s":[10,4,2],"c":8659490,"t":5},{"p":[80,14,-4],"s":[6,6,16],"id":12,"col":1},{"p":[-76,14,-4],"s":[6,6,16],"id":12,"col":1},{"p":[80,12,-6],"s":[10,10,22],"col":1,"c":9342349,"t":5},{"p":[33,38,115],"s":[4,6,27],"c":1780575,"t":1},{"p":[33,44,115],"s":[4,2,27],"c":14277081,"t":5},{"p":[33,38,68],"s":[4,6,20],"c":1780575,"t":1},{"p":[33,44,68],"s":[4,2,20],"c":14277081,"t":5},{"p":[33,38,6],"s":[4,6,12],"c":1780575,"t":1},{"p":[33,44,6],"s":[4,2,12],"c":14277081,"t":5},{"p":[33,38,-12],"s":[4,6,12],"c":1780575,"t":1},{"p":[33,44,-12],"s":[4,2,12],"c":14277081,"t":5},{"p":[33,38,-30],"s":[4,6,12],"c":1780575,"t":1},{"p":[33,44,-30],"s":[4,2,12],"c":14277081,"t":5},{"p":[33,38,-48],"s":[4,6,12],"c":1780575,"t":1},{"p":[33,44,-48],"s":[4,2,12],"c":14277081,"t":5},{"p":[33,38,-96],"s":[4,6,72],"c":1780575,"t":1},{"p":[33,44,-96],"s":[4,2,72],"c":14277081,"t":5},{"p":[33,38,45],"s":[4,6,14],"c":1780575,"t":1},{"p":[33,38,25],"s":[4,6,14],"c":1780575,"t":1},{"p":[33,44,45],"s":[4,2,14],"c":14277081,"t":5},{"p":[33,44,25],"s":[4,2,14],"c":14277081,"t":5},{"p":[-24,32,-44],"s":[2,2,4],"c":4346455,"t":6},{"p":[-22,34,-41],"s":[6,2,6],"c":2327458,"t":6},{"p":[-20,32,-44],"s":[2,2,4],"c":4346455,"t":6},{"p":[-16,32,-44],"s":[2,2,4],"c":4346455,"t":6},{"p":[-12,32,-44],"s":[2,2,4],"c":4346455,"t":6},{"p":[-24,32,-62],"s":[2,2,4],"c":4346455,"t":6},{"p":[-20,32,-62],"s":[2,2,4],"c":4346455,"t":6},{"p":[-16,32,-62],"s":[2,2,4],"c":4346455,"t":6},{"p":[-12,32,-62],"s":[2,2,4],"c":4346455,"t":6},{"p":[-22,34,-45],"s":[6,8,2],"c":2327458,"t":6},{"p":[-26,34,-42],"s":[2,4,8],"c":4346455,"t":6},{"p":[-18,33,-42],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[-14,34,-45],"s":[6,8,2],"c":2327458,"t":6},{"p":[-14,34,-41],"s":[6,2,6],"c":2327458,"t":6},{"p":[-10,34,-42],"s":[2,4,8],"c":4346455,"t":6},{"p":[-26,34,-60],"s":[2,4,8],"c":4346455,"t":6},{"p":[-22,34,-63],"s":[6,8,2],"c":2327458,"t":6},{"p":[-22,34,-59],"s":[6,2,6],"c":2327458,"t":6},{"p":[-18,33,-60],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[-14,34,-59],"s":[6,2,6],"c":2327458,"t":6},{"p":[-14,34,-63],"s":[6,8,2],"c":2327458,"t":6},{"p":[-10,34,-60],"s":[2,4,8],"c":4346455,"t":6},{"p":[30,34,-6],"s":[2,4,8],"c":4346455,"t":6},{"p":[30,34,-24],"s":[2,4,8],"c":4346455,"t":6},{"p":[30,34,-42],"s":[2,4,8],"c":4346455,"t":6},{"p":[30,34,-60],"s":[2,4,8],"c":4346455,"t":6},{"p":[28,32,-8],"s":[2,2,4],"c":4346455,"t":6},{"p":[28,32,-26],"s":[2,2,4],"c":4346455,"t":6},{"p":[28,32,-44],"s":[2,2,4],"c":4346455,"t":6},{"p":[28,32,-62],"s":[2,2,4],"c":4346455,"t":6},{"p":[24,32,-8],"s":[2,2,4],"c":4346455,"t":6},{"p":[24,32,-26],"s":[2,2,4],"c":4346455,"t":6},{"p":[24,32,-44],"s":[2,2,4],"c":4346455,"t":6},{"p":[24,32,-62],"s":[2,2,4],"c":4346455,"t":6},{"p":[22,33,-6],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[22,33,-24],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[22,33,-42],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[22,33,-60],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[20,32,-8],"s":[2,2,4],"c":4346455,"t":6},{"p":[20,32,-26],"s":[2,2,4],"c":4346455,"t":6},{"p":[20,32,-44],"s":[2,2,4],"c":4346455,"t":6},{"p":[20,32,-62],"s":[2,2,4],"c":4346455,"t":6},{"p":[16,32,-8],"s":[2,2,4],"c":4346455,"t":6},{"p":[16,32,-26],"s":[2,2,4],"c":4346455,"t":6},{"p":[16,32,-44],"s":[2,2,4],"c":4346455,"t":6},{"p":[16,32,-62],"s":[2,2,4],"c":4346455,"t":6},{"p":[26,34,-5],"s":[6,2,6],"c":2327458,"t":6},{"p":[26,34,-23],"s":[6,2,6],"c":2327458,"t":6},{"p":[26,34,-41],"s":[6,2,6],"c":2327458,"t":6},{"p":[26,34,-59],"s":[6,2,6],"c":2327458,"t":6},{"p":[26,34,-9],"s":[6,8,2],"c":2327458,"t":6},{"p":[26,34,-27],"s":[6,8,2],"c":2327458,"t":6},{"p":[26,34,-45],"s":[6,8,2],"c":2327458,"t":6},{"p":[26,34,-63],"s":[6,8,2],"c":2327458,"t":6},{"p":[18,34,-5],"s":[6,2,6],"c":2327458,"t":6},{"p":[18,34,-23],"s":[6,2,6],"c":2327458,"t":6},{"p":[18,34,-41],"s":[6,2,6],"c":2327458,"t":6},{"p":[18,34,-59],"s":[6,2,6],"c":2327458,"t":6},{"p":[18,34,-9],"s":[6,8,2],"c":2327458,"t":6},{"p":[18,34,-27],"s":[6,8,2],"c":2327458,"t":6},{"p":[18,34,-45],"s":[6,8,2],"c":2327458,"t":6},{"p":[18,34,-63],"s":[6,8,2],"c":2327458,"t":6},{"p":[14,34,-6],"s":[2,4,8],"c":4346455,"t":6},{"p":[14,34,-24],"s":[2,4,8],"c":4346455,"t":6},{"p":[14,34,-42],"s":[2,4,8],"c":4346455,"t":6},{"p":[14,34,-60],"s":[2,4,8],"c":4346455,"t":6},{"p":[33,22,115],"s":[4,16,27],"c":13562879,"t":6},{"p":[30,34,32],"s":[2,4,8],"c":4346455,"t":6},{"p":[30,34,52],"s":[2,4,8],"c":4346455,"t":6},{"p":[26,34,33],"s":[6,2,6],"c":2327458,"t":6},{"p":[26,34,53],"s":[6,2,6],"c":2327458,"t":6},{"p":[22,33,32],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[22,33,52],"s":[2,4,8],"col":1,"c":4346455,"t":6},{"p":[28,32,30],"s":[2,2,4],"c":4346455,"t":6},{"p":[28,32,50],"s":[2,2,4],"c":4346455,"t":6},{"p":[24,32,30],"s":[2,2,4],"c":4346455,"t":6},{"p":[24,32,50],"s":[2,2,4],"c":4346455,"t":6},{"p":[20,32,30],"s":[2,2,4],"c":4346455,"t":6},{"p":[20,32,50],"s":[2,2,4],"c":4346455,"t":6},{"p":[18,34,33],"s":[6,2,6],"c":2327458,"t":6},{"p":[18,34,53],"s":[6,2,6],"c":2327458,"t":6},{"p":[16,32,30],"s":[2,2,4],"c":4346455,"t":6},{"p":[16,32,50],"s":[2,2,4],"c":4346455,"t":6},{"p":[14,34,32],"s":[2,4,8],"c":4346455,"t":6},{"p":[14,34,52],"s":[2,4,8],"c":4346455,"t":6},{"p":[26,34,29],"s":[6,8,2],"c":2327458,"t":6},{"p":[26,34,49],"s":[6,8,2],"c":2327458,"t":6},{"p":[18,34,29],"s":[6,8,2],"c":2327458,"t":6},{"p":[18,34,49],"s":[6,8,2],"c":2327458,"t":6},{"p":[21,32,114],"s":[21,22,4],"c":14277081,"t":5},{"p":[2,32,133],"s":[54,2,10],"c":13562879,"t":6},{"p":[-26,22,129],"s":[2,32,2],"c":14277081,"t":5},{"p":[30,22,129],"s":[2,32,2],"c":14277081,"t":5},{"p":[-26,22,139],"s":[2,32,6],"c":14277081,"t":5},{"p":[30,22,133],"s":[2,21,6],"c":14277081,"t":5},{"p":[2,32,122],"s":[57,2,12],"c":13562879,"t":6},{"p":[2,34,141],"s":[4,20,2],"c":14277081,"t":5},{"p":[-26,22,133],"s":[2,21,6],"c":14277081,"t":5},{"p":[2,34,138],"s":[54,5,7],"c":5597552,"t":6},{"p":[30,22,139],"s":[2,32,6],"c":14277081,"t":5},{"p":[2,54,139],"s":[42,2,5],"r":[0.35,0,0],"c":5597552,"t":6},{"p":[18,35,125],"s":[8,2,6],"c":8199196,"t":6},{"p":[13,34,124],"s":[2,4,8],"c":4346455,"t":6},{"p":[-9,34,124],"s":[2,4,8],"c":4346455,"t":6},{"p":[-14,35,125],"s":[8,2,6],"c":8199196,"t":6},{"p":[23,34,124],"s":[2,4,8],"c":4346455,"t":6},{"p":[-19,34,124],"s":[2,4,8],"c":4346455,"t":6},{"p":[18,35,121],"s":[8,9,2],"r":[-0.17,0,0],"c":8199196,"t":6},{"p":[-14,35,121],"s":[8,9,2],"r":[-0.17,0,0],"c":8199196,"t":6},{"p":[-22,34,141],"s":[6,20,2],"c":14277081,"t":5},{"p":[26,34,141],"s":[6,20,2],"c":14277081,"t":5},{"p":[-17,23,-67],"s":[21,31,4],"c":14277081,"t":5},{"p":[21,23,-67],"s":[21,31,4],"c":14277081,"t":5},{"p":[2,1,-111],"s":[29,21,26],"id":9,"d":1},{"p":[2,22,-128],"s":[66,16,8],"c":13562879,"t":6},{"p":[2,27,-136],"s":[58,11,8],"c":13562879,"t":6},{"p":[2,30,-144],"s":[50,8,8],"c":13562879,"t":6},{"p":[33,22,-111],"s":[4,16,26],"c":13562879,"t":6},{"p":[-29,22,-111],"s":[4,16,26],"c":13562879,"t":6},{"p":[-17,32,114],"s":[21,22,4],"c":14277081,"t":5},{"p":[2,20,-89],"s":[58,2,18],"c":13562879,"t":6},{"p":[24,20,-111],"s":[15,2,26],"c":13562879,"t":6},{"p":[-20,20,-111],"s":[15,2,26],"c":13562879,"t":6},{"p":[-12,32,109],"s":[13,22,3],"r":[0,-0.35,0],"c":9013659,"e":1842206,"t":2},{"p":[-6,47,113],"s":[1,3,2],"c":6709601,"t":5},{"p":[-6,35,113],"s":[1,3,2],"c":6709601,"t":5},{"p":[19,34,134],"s":[1,7,1],"c":3818568,"t":6},{"p":[19,40,133],"s":[3,1,1],"r":[0.17,0,0],"c":3818568,"t":6},{"p":[21,39,133],"s":[1,3,1],"r":[0.17,0,0],"c":3818568,"t":6},{"p":[17,39,133],"s":[1,3,1],"r":[0.17,0,0],"c":3818568,"t":6},{"p":[-14,34,134],"s":[1,7,1],"c":3818568,"t":6},{"p":[-12,39,133],"s":[1,3,1],"r":[0.17,0,0],"c":3818568,"t":6},{"p":[-14,40,133],"s":[3,1,1],"r":[0.17,0,0],"c":3818568,"t":6},{"p":[-16,39,133],"s":[1,3,1],"r":[0.17,0,0],"c":3818568,"t":6},{"p":[-53,16,42],"s":[62,1,24],"col":1,"r":[0,0,0.52],"c":6907493,"t":5},{"p":[2,54,143],"s":[44,4,3],"c":14277081,"t":5},{"p":[-9,43,147],"s":[18,12,2],"col":1,"pe":1,"r":[-0.35,0,0],"c":9020111,"o":0.4,"t":5},{"p":[-20,43,143],"s":[3,11,3],"c":14277081,"t":5},{"p":[2,43,147],"s":[4,12,2],"col":1,"pe":1,"r":[-0.35,0,0],"c":14277081,"t":5},{"p":[24,43,143],"s":[3,11,3],"c":14277081,"t":5},{"p":[13,43,147],"s":[18,12,2],"col":1,"pe":1,"r":[-0.35,0,0],"c":9020111,"o":0.4,"t":5},{"p":[23,43,147],"s":[2,12,3],"col":1,"pe":1,"r":[-0.35,0,0],"c":14277081,"t":5},{"p":[-19,43,147],"s":[2,12,3],"col":1,"pe":1,"r":[-0.35,0,0],"c":14277081,"t":5},{"p":[2,43,147],"s":[44,4,3],"pe":1,"v":1,"c":9510430,"t":5},{"p":[2,47,145],"s":[44,4,3],"pe":1,"v":1,"c":9510430,"t":5},{"p":[2,51,145],"s":[44,4,1],"pe":1,"v":1,"c":9510430,"t":5},{"p":[2,58,1],"s":[47,4,282],"c":14277081,"t":5},{"p":[-29,38,-96],"s":[4,6,72],"c":1780575,"t":1},{"p":[-29,44,-96],"s":[4,2,72],"c":14277081,"t":5},{"p":[29,38,-136],"s":[4,6,8],"c":1780575,"t":1},{"p":[-25,38,-136],"s":[4,6,8],"c":1780575,"t":1},{"p":[-21,38,-144],"s":[4,6,8],"c":1780575,"t":1},{"p":[25,38,-144],"s":[4,6,8],"c":1780575,"t":1},{"p":[2,38,-144],"s":[42,6,8],"c":1780575,"t":1},{"p":[-25,44,-136],"s":[4,10,8],"c":14277081,"t":5},{"p":[29,44,-136],"s":[4,10,8],"c":14277081,"t":5},{"p":[2,44,-144],"s":[50,14,8],"c":14277081,"t":5},{"p":[2,39,-136],"s":[50,9,8],"c":13562879,"t":6},{"p":[27,54,1],"s":[8,4,282],"c":14277081,"t":5},{"p":[9,2,-51],"s":[4,10,10],"c":1513496,"t":5},{"p":[-4,2,-51],"s":[4,10,10],"c":1513496,"t":5},{"p":[-14,2,-51],"s":[4,10,10],"c":1513496,"t":5},{"p":[9,2,-70],"s":[4,10,10],"c":1513496,"t":5},{"p":[-4,2,-70],"s":[4,10,10],"c":1513496,"t":5},{"p":[-14,2,-70],"s":[4,10,10],"c":1513496,"t":5},{"p":[-40,48,-140],"s":[36,3,8],"c":14277081,"t":5},{"p":[-45,48,-146],"s":[21,3,4],"c":14277081,"t":5},{"p":[-48,48,-150],"s":[11,3,4],"c":14277081,"t":5},{"p":[-38,48,-134],"s":[23,3,4],"c":14277081,"t":5},{"p":[-36,48,-130],"s":[11,3,4],"c":14277081,"t":5},{"p":[44,48,-140],"s":[36,3,8],"c":14277081,"t":5},{"p":[42,48,-134],"s":[23,3,4],"c":14277081,"t":5},{"p":[40,48,-130],"s":[11,3,4],"c":14277081,"t":5},{"p":[49,48,-146],"s":[21,3,4],"c":14277081,"t":5},{"p":[52,48,-150],"s":[11,3,4],"c":14277081,"t":5},{"p":[6,56,-150],"s":[3,40,5],"c":14277081,"t":5},{"p":[6,63,-155],"s":[3,31,5],"c":14277081,"t":5},{"p":[6,70,-160],"s":[3,20,5],"c":14277081,"t":5},{"p":[6,78,-165],"s":[3,10,5],"c":14277081,"t":5},{"p":[6,58,-145],"s":[3,34,5],"c":14277081,"t":5},{"p":[6,58,-140],"s":[4,27,5],"c":14277081,"t":5},{"p":[6,61,-135],"s":[4,20,5],"c":14277081,"t":5},{"p":[6,61,-130],"s":[5,14,5],"c":14277081,"t":5},{"p":[6,61,-125],"s":[5,5,5],"c":14277081,"t":5},{"p":[2,54,114],"s":[42,3,4],"c":14277081,"t":5},{"p":[-53,16,56],"s":[62,3,4],"col":1,"r":[0,0,0.52],"c":16534288,"t":5},{"p":[-53,16,28],"s":[62,3,4],"col":1,"r":[0,0,0.52],"c":16534288,"t":5},{"p":[-68,4,42],"s":[6,3,32],"col":1,"r":[0,0,0.52],"c":16534288,"t":5},{"p":[-50,14,42],"s":[6,3,32],"col":1,"r":[0,0,0.52],"c":16534288,"t":5},{"p":[-34,23,42],"s":[6,3,32],"col":1,"r":[0,0,0.52],"c":16534288,"t":5},{"p":[-81,0,42],"s":[4,3,32],"col":1,"r":[0,0,0.52],"c":16534288,"t":5},{"p":[-31,1,56],"s":[10,28,2],"pe":1,"v":1,"c":8659490,"t":5},{"p":[-42,1,56],"s":[10,22,2],"pe":1,"v":1,"c":8659490,"t":5},{"p":[-53,1,56],"s":[10,15,2],"pe":1,"v":1,"c":8659490,"t":5},{"p":[-27,1,42],"s":[2,26,27],"pe":1,"v":1,"c":8659490,"t":5},{"p":[-64,1,56],"s":[10,8,2],"pe":1,"v":1,"c":8659490,"t":5},{"p":[-64,1,28],"s":[10,8,2],"pe":1,"v":1,"c":8659490,"t":5},{"p":[-53,1,28],"s":[10,15,2],"pe":1,"v":1,"c":8659490,"t":5},{"p":[-42,1,28],"s":[10,22,2],"pe":1,"v":1,"c":8659490,"t":5},{"p":[-31,1,27],"s":[10,28,2],"pe":1,"v":1,"c":8659490,"t":5},{"p":[28,21,-83],"s":[7,8,7],"id":2},{"p":[28,21,-95],"s":[7,8,7],"id":2},{"p":[28,21,-107],"s":[7,8,7],"id":2},{"p":[28,21,-119],"s":[7,8,7],"id":2},{"p":[25,23,-102],"s":[2,1,45],"c":5263954,"t":5},{"p":[25,26,-102],"s":[2,1,45],"c":5263954,"t":5},{"p":[6,62,-155],"s":[5,1,5],"v":1,"c":14277081,"t":5},{"p":[6,69,-160],"s":[5,1,5],"v":1,"c":14277081,"t":5},{"p":[6,62,-131],"s":[6,4,17],"v":1,"c":14277081,"t":5},{"p":[2,54,-67],"s":[42,4,4],"c":14277081,"t":5},{"p":[-20,22,-87],"s":[12,12,12],"id":1},{"p":[-20,22,-117],"s":[12,12,12],"id":1},{"p":[2,38,-128],"s":[58,1,8],"c":1780575,"t":1}],
    }
}
localStorage.setItem('krunk_prefabs', JSON.stringify(prefabs))