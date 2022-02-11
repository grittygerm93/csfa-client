export interface Deactivating {
  evaluate(): boolean | Promise<boolean>
}

export class Recipe {
  id: string;
  title: string;
  image?: string;
  instruction?: string;
  ingredients?: string[];

}

/*
private String id;
	private String title;
	private String image;
	private String instruction;
	private List<String> ingredients = new LinkedList<>();
	*/
