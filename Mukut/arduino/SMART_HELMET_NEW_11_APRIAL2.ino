#include<SoftwareSerial.h>
SoftwareSerial Serial1(2,3); //make RX arduino line is pin 2, make TX arduino line is pin 3.
SoftwareSerial gps(10,11);
#include<LiquidCrystal.h>
LiquidCrystal lcd(9,8,7,6,5,4);

int xPin=A4; 
int yPin=A3; 
int zPin=A2; 

long x; 
long y; 
long z; 
const int MOTOR=15;
const int SWITCH1=12;
const int SWITCH2=14;
const int SWITCH3=A5; 
int xsample=0;
int ysample=0;
int zsample=0;
#define samples 10

int i=0,k=0;
int  gps_status=0;
float latitude=0; 
float logitude=0;                       
String Speed="";
String gpsString="";
char *test="$GPRMC";

void initModule(String cmd, char *res, int t)
{
  while(1)
  {
    Serial.println(cmd);
    Serial1.println(cmd);
    delay(100);
    while(Serial1.available()>0)
    {
       if(Serial1.find(res))
       {
        Serial.println(res);
        delay(t);
        return;
       }

       else
       {
        Serial.println("Error");
       }
    }
    delay(t);
  }
}

void setup() 
{
   pinMode(SWITCH1,INPUT_PULLUP);
   pinMode(SWITCH2,INPUT_PULLUP);
    pinMode(SWITCH3,INPUT_PULLUP); 
    pinMode(MOTOR,OUTPUT); 
   
  digitalWrite(MOTOR, LOW); 
  Serial1.begin(9600);
  Serial.begin(9600);
  lcd.begin(16,2);  
  lcd.print("    WELCOME      ");
  lcd.setCursor(0,1);
  lcd.print(" SMART  HELMET   ");
  delay(2000);
  lcd.clear();
  lcd.print("ACCIDENT ALERT ");
  lcd.setCursor(0,1);
  lcd.print("     SYSTEM    ");
  delay(2000);
  lcd.clear();
  lcd.print("Initializing");
  lcd.setCursor(0,1);
  lcd.print("Please Wait...");
  delay(1000);
  
  Serial.println("Initializing....");
 /*
  initModule("AT","OK",1000);
  initModule("ATE1","OK",1000);
  initModule("AT+CPIN?","READY",1000);  
  initModule("AT+CMGF=1","OK",1000);     
  initModule("AT+CNMI=2,2,0,0,0","OK",1000);  
  Serial.println("Initialized Successfully");
  */
  lcd.clear();
  lcd.print("Initialized");
  lcd.setCursor(0,1);
  lcd.print("Successfully");
  delay(2000);
  lcd.clear();
  lcd.print("Callibrating ");
  lcd.setCursor(0,1);
  lcd.print("Acceleromiter");
  for(int i=0;i<samples;i++)
  {
    xsample+=analogRead(x);
    ysample+=analogRead(y);
    zsample+=analogRead(z);
  }

  xsample/=samples;
  ysample/=samples;
  zsample/=samples;

  Serial.println(xsample);
  Serial.println(ysample);
  Serial.println(zsample);
  delay(1000);
  
  lcd.clear();
  lcd.print("Waiting For GPS");
  lcd.setCursor(0,1);
  lcd.print("     Signal    ");
  delay(2000);
  gps.begin(9600);
 
 // get_gps();
 // show_coordinate();
  delay(2000);
  lcd.clear();
  lcd.print("GPS is Ready");
  delay(1000);
  lcd.clear();
 // get_gps();
  //show_coordinate();
  //lcd.print("System Ready");
  Serial.println("System Ready..");
// pawan();
 lcd.clear(); 
}

void loop() 
{
  
 
if  ((digitalRead(SWITCH1)==HIGH&&digitalRead(SWITCH2)==HIGH))
{
  digitalWrite(MOTOR, LOW); 
}
if  ((digitalRead(SWITCH1)==LOW&&digitalRead(SWITCH2)==HIGH))
{
  digitalWrite(MOTOR, HIGH); 
}
if  ((digitalRead(SWITCH1)==HIGH&&digitalRead(SWITCH2)==LOW))
{
  digitalWrite(MOTOR, LOW); 
}

if  ((digitalRead(SWITCH1)==LOW&&digitalRead(SWITCH2)==LOW))
{
  digitalWrite(MOTOR, LOW); 
}
if  ((digitalRead(SWITCH3)==LOW))
{
  Send11();
}
  x = analogRead(xPin); 
  y = analogRead(yPin); 
  z = analogRead(zPin); 
    if(x<300) 
           
      Send();
    else if(x>400) 
      Sendnew();
      
    else if(y>400) 
      right();
    else if(y<300) 
      left();
    else
      stop_();


}

void gpsEvent()
{
  gpsString="";
  while(1)
  {
   while (gps.available()>0)            //Serial incoming data from GPS
   {
    char inChar = (char)gps.read();
     gpsString+= inChar;                    //store incoming data from GPS to temparary string str[]
     i++;
     Serial.print(inChar);
     if (i < 7)                      
     {
      if(gpsString[i-1] != test[i-1])         //check for right string
      {
        i=0;
        gpsString="";
      }
     }
    if(inChar=='\r')
    {
     if(i>60)
     {
       gps_status=1;
       break;
     }
     else
     {
       i=0;
     }
    }
  }
   if(gps_status)
    break;
  }
}
void get_gps()
{
  lcd.clear();
  lcd.print("Getting GPS Data");
  lcd.setCursor(0,1);
  lcd.print("Please Wait.....");
   gps_status=0;
   int x=0;
   while(gps_status==0)
   {
    gpsEvent();
    int str_lenth=i;
    coordinate2dec();
    i=0;x=0;
    str_lenth=0;
   }
}


void show_coordinate()
{
    lcd.clear();
    lcd.print("Lat:");
    lcd.print(latitude);
    lcd.setCursor(0,1);
    lcd.print("Log:");
    lcd.print(logitude);
    Serial.print("Latitude:");
    Serial.println(latitude);
    Serial.print("Longitude:");
    Serial.println(logitude);
    Serial.print("Speed(in knots)=");
    Serial.println(Speed);
    delay(2000);
    lcd.clear();
    lcd.print("Speed(Knots):");
    lcd.setCursor(0,1);
    lcd.print(Speed);
}

void coordinate2dec()
{
  String lat_degree="";
    for(i=20;i<=21;i++)         
      lat_degree+=gpsString[i];
      
  String lat_minut="";
     for(i=22;i<=28;i++)         
      lat_minut+=gpsString[i];

  String log_degree="";
    for(i=32;i<=34;i++)
      log_degree+=gpsString[i];

  String log_minut="";
    for(i=35;i<=41;i++)
      log_minut+=gpsString[i];
    
    Speed="";
    for(i=45;i<48;i++)          //extract longitude from string
      Speed+=gpsString[i];
      
     float minut= lat_minut.toFloat();
     minut=minut/60;
     float degree=lat_degree.toFloat();
     latitude=degree+minut;
     
     minut= log_minut.toFloat();
     minut=minut/60;
     degree=log_degree.toFloat();
     logitude=degree+minut;
}
void stop_()
{
  
}

void Send()
{ 
  // show_coordinate();
      lcd.clear();
       lcd.print("SENDING SMS ");
       lcd.setCursor(0,1);
       lcd.print("VEHICLE ACCIDENT");
     
 
   Serial1.println("AT");
    Serial.println("AT");
   delay(500);
   serialPrint();
   Serial1.println("AT+CMGF=1");
   Serial.println("AT+CMGF=1");
   delay(500);
   serialPrint();
   Serial1.print("AT+CMGS=");
   Serial.print("AT+CMGS=");
   Serial1.print('"');
   Serial1.print("+919971829389");    //mobile no. for SMS alert
   Serial.print("+919717365069");
   Serial1.println('"');
   delay(500);
   Serial1.print("ACCIDENT ALERT:  An accident has been detected at this Location - https://www.google.com/maps/search/dtu/@28.7475374,77.1151494,17z/data=!3m1!4b1?entry=ttu");
   Serial.print("ACCIDENT ALERT:THIS LOCATION");
   delay(500);
   serialPrint();
   /*
   Serial1.print("Latitude:");
   Serial1.println(latitude);
   delay(500);
   serialPrint();
   Serial1.print(" longitude:");
   Serial1.println(logitude);
   delay(500);
   serialPrint();
   Serial1.print(" Speed:");
   Serial1.print(Speed);
   Serial1.println("Knots");
   delay(500);
   serialPrint();
   Serial1.print("http://maps.google.com/maps?&z=15&mrt=yp&t=k&q=");
   Serial1.print(latitude,6);
   Serial1.print("+");              //28.612953, 77.231545   //28.612953,77.2293563
   Serial1.print(logitude,6);
   serialPrint();
   */
   Serial1.write(26);
   delay(2000);
   serialPrint();
    lcd.clear();
   loop();
}
void left()
{ 
 
   loop();
}
void right()
{ 
  
   loop();

}
void Sendnew()
{ 
  lcd.clear();
       lcd.print("SENDING SMS ");
       lcd.setCursor(0,1);
       lcd.print("VEHICLE ACCIDENT");
     
 
   Serial1.println("AT");
   Serial.println("AT");
   delay(500);
   serialPrint();
   Serial1.println("AT+CMGF=1");
   Serial.println("AT+CMGF=1");
   delay(500);
   serialPrint();
   Serial1.print("AT+CMGS=");
   Serial.print("AT+CMGS=");
   Serial1.print('"');
   Serial1.print("+919971829389");    //mobile no. for SMS alert
   Serial.print("+919717365069");    //mobile no. for SMS alert
   Serial1.println('"');
   delay(500);
   Serial1.print("ACCIDENT ALERT:  An accident has been detected at this Location - https://www.google.com/maps/search/dtu/@28.7475374,77.1151494,17z/data=!3m1!4b1?entry=ttu");
   Serial.print("ACCIDENT ALERT:THIS LOCATION");
   delay(500);
   serialPrint();
   /*
   Serial1.print("Latitude:");
   Serial1.println(latitude);
   delay(500);
   serialPrint();
   Serial1.print(" longitude:");
   Serial1.println(logitude);
   delay(500);
   serialPrint();
   Serial1.print(" Speed:");
   Serial1.print(Speed);
   Serial1.println("Knots");
   delay(500);
   serialPrint();
   Serial1.print("http://maps.google.com/maps?&z=15&mrt=yp&t=k&q=");
   Serial1.print(latitude,6);
   Serial1.print("+");              //28.612953, 77.231545   //28.612953,77.2293563
   Serial1.print(logitude,6);
   serialPrint();
   */
   Serial1.write(26);
   delay(2000);
   serialPrint();
    lcd.clear();
  
   loop();
}
void Send11()
{ 
  lcd.clear();
       lcd.print("SENDING SMS ");
       lcd.setCursor(0,1);
       lcd.print("EMERGENCY!!!!!");
     
 
   Serial1.println("AT");
   Serial.println("AT");
   delay(500);
   serialPrint();
   Serial1.println("AT+CMGF=1");
    Serial.println("AT+CMGF=1");
   delay(500);
   serialPrint();
   Serial1.print("AT+CMGS=");
   Serial.print("AT+CMGS=");
   Serial1.print('"');
   Serial1.print("+919971829389");    //mobile no. for SMS alert
   Serial.print("+919717365069"); 
   Serial1.println('"');
   delay(500);
   Serial1.print("ALERT:EMERGENCY");
   Serial.print("ALERT:EMERGENCY");
   delay(500);
   serialPrint();
   /*
   Serial1.print("Latitude:");
   Serial1.println(latitude);
   delay(500);
   serialPrint();
   Serial1.print(" longitude:");
   Serial1.println(logitude);
   delay(500);
   serialPrint();
   Serial1.print(" Speed:");
   Serial1.print(Speed);
   Serial1.println("Knots");
   delay(500);
   serialPrint();
   Serial1.print("http://maps.google.com/maps?&z=15&mrt=yp&t=k&q=");
   Serial1.print(latitude,6);
   Serial1.print("+");              //28.612953, 77.231545   //28.612953,77.2293563
   Serial1.print(logitude,6);
   serialPrint();
   */
   Serial1.write(26);
   delay(2000);
   serialPrint();
    lcd.clear();
  
   loop();
}





void serialPrint()
{
  while(Serial1.available()>0)
  {
    Serial.print(Serial1.read());
  }
}
