
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const BubbleSortDemo = () => {
  const [array, setArray] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [sorting, setSorting] = useState(false);
  const { toast } = useToast();

  const addNumber = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setArray([...array, num]);
      setInputValue('');
    } else {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid number",
        variant: "destructive",
      });
    }
  };

  const bubbleSort = async () => {
    setSorting(true);
    const arr = [...array];
    let swapped;
    
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
          setArray([...arr]);
          // Add delay to visualize the sorting
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } while (swapped);
    
    setSorting(false);
  };

  const reset = () => {
    setArray([]);
    setSorting(false);
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex gap-2">
        <Input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          className="flex-1"
          disabled={sorting}
        />
        <Button onClick={addNumber} disabled={sorting}>Add</Button>
        <Button onClick={bubbleSort} disabled={sorting || array.length === 0} variant="secondary">
          Sort
        </Button>
        <Button onClick={reset} disabled={sorting} variant="destructive">
          Reset
        </Button>
      </div>
      <div className="flex gap-2 items-end justify-center min-h-[200px] border rounded-lg p-4">
        {array.map((num, index) => (
          <div
            key={index}
            className="bg-blue-500 w-12 transition-all duration-300"
            style={{ height: `${num * 3}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default BubbleSortDemo;
