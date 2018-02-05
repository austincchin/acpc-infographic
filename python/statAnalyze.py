import os

def run():
	print "Now running StatAnalyze.py"
	w = open('StatOutput.txt','w')
	directory = "../data"
	for r, d, fnames in os.walk(directory):
		for f in fnames:
			if "statistics" in f:
				print f

				scopeName = f
				inpFile = open(os.path.join(r,f),'r')

				w.write('$scope.' + f + ' = {\n')


				x = inpFile.readlines()
				maxLine = len(x)
				count = 0

				for o in x:
					o = o.strip().split(',')
					print o

					w.write("\t" + o[0] + ": '" + o[1] + "'") 
					
					if count == maxLine-1:
						w.write('\n')
					else:
						w.write(',\n')

					count += 1


				w.write('};\n\n')

