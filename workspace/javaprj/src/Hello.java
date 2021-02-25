class Hello{
    public static void main(String[] args){
	int kor, eng, math, total;
	double avg;
        kor = 80;
        eng = 70;
        math = 100;
        
        total = kor + eng + math;
        avg = total / 3;
	
	System.out.printf("total is %d\n", total);
    }
}