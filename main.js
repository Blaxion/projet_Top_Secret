// // intro 1
// for (let i = 0; i < 5; i++) {
//     console.log("Farhad")
//     console.log(i)
// }


// // intro 2
// let classe = ["cactus","professeur","montmiraille"];
// classe.forEach(e => {
//     console.log(`Bonjour ${e}`)
// });


// // mélange 1
// let max = prompt("Ton nbr MAX ici")
// for (let i = 0; i <= max; i+=2) {
//     console.log(i)
// }


// // mélange 2
// let max = prompt("Ton nbr MAX ici")
// for (let i = 0; i <= max; i+=2) {
//     if (i == max) {
//         console.log("Le nrb max est paire")
//     }
// }


// // mélange 3
// let c13 =["Alexis", "Loic", "Mohammed", "Yassin", "Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux"]

// let pair = []
// let impair = []
// let i = 0
// c13.forEach(e => {
//     if (i%2 == 0) {
//         console.log(`${e} est paire`)
//         pair.push(e)
//     }else{
//         console.log(`${e} est impaire`)
//         impair.push(e)
//     }  
//     i++
// });

// EXO 4 p.1
// let tab = ["Adolf","Staline","Kim","Saddam","Pinochet","dr. Hashimoto","Loukachenko","Mao Zedong","Leopold II"]
// let i = 0
// tab.forEach(e => {
//     console.log(e)
//     console.log(e.charAt(0))
//     console.log(e.charAt(1))
//     console.log(e.charAt(1)+e)
//     if (i%2 == 0) {
//         console.log(`${e} est d'indice pair`)
//     }
//     i++
// });

// EXO 4 p.2
// let tab = ["adolf","staline","kim","saddam","pinochet","dr. Hashimoto","loukachenko","mao Zedong","leopold II"]
// let i = 0
// tab.forEach(e => {
//     if (i%2 != 0) {
//         console.log(e.toUpperCase())
//         if (e.length > 4) {
//             console.log(e)
//         }
//     }
//     if (i%2 == 0) {
//         console.log(e.charAt(0).toUpperCase() + e.slice(1))
//         if (e.length > 4) {
//             console.log(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
//         }
//     }
//     i++
//     switch (e.charAt(0)) {
//         case "a":
//             console.log(e)
//             break;
//         case "e":
//             console.log(e)
//             break;
//         case "m":
//             console.log(e)
//             break;
//         case "f":
//             console.log(e)
//             break;
//         case "y":
//             console.log(e)
//             break;
//         case "n":
//             console.log(e)
//             break;
//         default:
//             break;
//     }
//     if (e.length > 5) {
//         switch (e.charAt(0)) {
//             case "a":
//                 console.log(e)
//                 break;
//             case "e":
//                 console.log(e)
//                 break;
//             case "m":
//                 console.log(e)
//                 break;
//             case "f":
//                 console.log(e)
//                 break;
//             case "y":
//                 console.log(e)
//                 break;
//             case "n":
//                 console.log(e)
//                 break;
//             default:
//                 break;
//         }
//     }
// });

// EXO 4 p.3
let tab = ["adolf","staline","kim","saddam","mino","dr. Hashimoto","loukachenko","mao Zedong","leopold II"]
let ini = ""
let str = ""
tab.forEach(e => {
    if (e.length < 5) {
        switch (e.charAt(0)) {
            case "a":
                console.log(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
                break;
            case "e":
                console.log(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
                break;
            case "m":
                console.log(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
                break;
            case "f":
                console.log(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
                break;
            case "y":
                console.log(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
                break;
            case "n":
                console.log(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
                break;
            default:
                break;
        }
    }
    if (e.length < 5 && tab.indexOf(e)%2 != 0)   {
        switch (e.charAt(0)) {
            case "a":
                console.log(e)
                break;
            case "e":
                console.log(e)
                break;
            case "m":
                console.log(e)
                break;
            case "f":
                console.log(e)
                break;
            case "y":
                console.log(e)
                break;
            case "k":
                console.log(e)
                break;
            case "c":
                console.log(e)
                break;
            case "p":
                console.log(e)
                break;
            case "o":
                console.log(e)
                break;
            case "n":
                console.log(e)
                break;
            default:
                break;
        }
    }
    if (e.length > 5 && tab.indexOf(e)%2 == 0)   {
        switch (e.charAt(0)) {
            case "a":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            case "e":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            case "m":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            case "f":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            case "y":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            case "k":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            case "c":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            case "p":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            case "o":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            case "n":
                console.log(e.charAt(0).toLowerCase() 
                + e.charAt(1).toUpperCase()
                + e.slice(2,e.length-1).toLowerCase()
                + e.charAt(e.length-1).toUpperCase())
                break;
            default:
                break;
        }
    }
    
    if (e.length < 7 && tab.indexOf(e)%2 == 0) {
        switch (e.charAt(0)) {
            case "a":
                ini = e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase()
                str=str+ini
                break;
            case "e":
                ini = e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase()
                str=str+ini
                break;
            case "m":
                ini = e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase()
                str=str+ini
                break;
            case "f":
                ini = e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase()
                str=str+ini
                break;
            case "y":
                ini = e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase()
                str=str+ini
                break;
            case "n":
                ini = e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase()
                str=str+ini
                break;
            case "k":
                ini = e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase() 
                str=str+ini
                break;
            case "o":
                ini = e.charAt(0).toUpperCase() + e.charAt(1).toLowerCase()
                str=str+ini
                break;
            default:
                break;
        }
    }
    

}); 
console.log(str)
























