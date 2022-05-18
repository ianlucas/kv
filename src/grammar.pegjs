start
  = d:(pair _)* { return d.map(a => a[0]) }

string
  = "\"" d:char* "\"" { return d.join("") }
  
char
  = [^\\"\n]

key
  = string
  
value
  = string / object
  
object
  = "{" d:(_ pair _)+ "}" { return d.map(a => a[1]) }
  
pair
  = key:key _ value:value { return [key, value] }
_
  = [ \t\n\r]*