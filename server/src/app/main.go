package main

import (
	"fmt"
	"net/http"
)

func main() {
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("HackathonITBoroda")
	})
	http.ListenAndServe(":80", nil)
}