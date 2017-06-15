let upcaseFirst = strings => strings.join().replace(/\b\w/g, match => match.toUpperCase());
// warto zwrocic uwage na funkcyjne match!

upcaseFirst `krol karol kupil krolowej karolinie` // drukuje : "Krol Karol Kupil Krolowej Karolinie"

// replace jakie dalsze argumenty callbacku przekazuje grupy przechwytujace
let link2 = '/topics/asfasf/test'
link2.replace(/(\/topics\/)([^\/]+)(.*)/, (x, ...parts) => `${parts[0]}ZMIANA${parts[2]}`)
//wynik - /topics/ZMIANA/test
