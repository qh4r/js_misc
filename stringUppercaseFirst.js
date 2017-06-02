let upcaseFirst = strings => strings.join().replace(/\b\w/g, match => match.toUpperCase());
// warto zwrocic uwage na funkcyjne match!

upcaseFirst `krol karol kupil krolowej karolinie` // drukuje : "Krol Karol Kupil Krolowej Karolinie"
