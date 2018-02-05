#this is in place until i convert all CSVs to JSON and then use the codecademy services method
import os

if __name__ == "__main__":
	w = open('ControllerOutput.txt','w')
	directory = "../data/parsedCSV"
	for r, d, fnames in os.walk(directory):
		for f in fnames:
			print f

			inpFile = open(os.path.join(r,f),'r')

			scopeName = f.replace('.csv','')
			
			w.write('$scope.' + scopeName + ' = [' + '\n')

			p = inpFile.readlines()
			index = len(p)
			print "THE SIZE IS " + str(index)
			cIn = 0
			for o in p:
				
				o = o.strip().split(',')
				nam = o[0]
				per = o[1]
				spe = o[2]
				mat = o[3]
				ess = o[4]
				img = o[5]

				print o
				w.write('\t{\n')
				w.write('\t\tname: ' + "'" + nam + "'" + ',\n')
				w.write('\t\tpersonality: ' + "'" + per +  "'" + ',\n')
				w.write('\t\tspecies: ' + "'" + spe +  "'" + ',\n')
				w.write('\t\tmaterial: ' + "'" + mat + "'" + ',\n')
				w.write('\t\tessence: ' + "'" + ess +  "'" + ',\n')
				w.write('\t\timg: ' + "'" + img + "'" + '\n')

				if cIn == index-1:
					w.write('\t}\n')
				else:
					w.write('\t},\n')
				cIn += 1

			w.write('];\n')
			inpFile.close()

	w.close()

				

				#	{
						#name
						#personality
						#species
						#material
						#essence
						#img
				#},



