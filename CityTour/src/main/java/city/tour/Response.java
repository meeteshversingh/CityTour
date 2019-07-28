package city.tour;

public class Response {

	Object o;

	private boolean status;
	
	public Object getO() {
		return o;
	}

	public void setO(Object o) {
		this.o = o;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Response [o=" + o + ", status=" + status + "]";
	}
	
	
}
