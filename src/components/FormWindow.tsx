
import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BubbleSortDemo from './BubbleSortDemo';
import BinarySearchDemo from './BinarySearchDemo';

const FormWindow = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="w-full max-w-4xl mx-auto shadow-lg border-2">
        <div className="bg-[#0078D4] p-2 flex items-center">
          <div className="text-white font-semibold">Algorithm Demonstration</div>
          <div className="ml-auto flex gap-2">
            <button className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-sm text-gray-600 flex items-center justify-center text-sm">
              -
            </button>
            <button className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-sm text-gray-600 flex items-center justify-center text-sm">
              □
            </button>
            <button className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded-sm text-white flex items-center justify-center text-sm">
              ×
            </button>
          </div>
        </div>
        <Tabs defaultValue="bubble-sort" className="p-4">
          <TabsList className="w-full">
            <TabsTrigger value="bubble-sort" className="flex-1">Bubble Sort</TabsTrigger>
            <TabsTrigger value="binary-search" className="flex-1">Binary Search</TabsTrigger>
          </TabsList>
          <TabsContent value="bubble-sort">
            <BubbleSortDemo />
          </TabsContent>
          <TabsContent value="binary-search">
            <BinarySearchDemo />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default FormWindow;
